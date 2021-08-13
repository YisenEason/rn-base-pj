
const url = 'ws://10.153.153.73:8001';

export default class WebSocketClient {

  static instance: WebSocketClient;

  ws: WebSocket | undefined;
  timer: NodeJS.Timeout | undefined;
  timeout: NodeJS.Timeout | undefined;

  // 心跳检查计数，当heartCheckCount达到heartCheckMAXCount次数时，发送一次心跳消息
  heartCheckMAXCount: number = 15;
  heartCheckCount: number = 0;

  // 距离上次接收到pong的秒数
  noPongSecond: number = 0;
  noPongMaxSecond: number = 60;

  constructor() {
  }

  /**
   * 获取WebSocket单例
   * @returns {WebSocketClient}
   */
  static getInstance(): WebSocketClient {
    if (!this.instance) {
      this.instance = new WebSocketClient();
    }
    return this.instance;
  }

  /**
   * 初始化WebSocket
   */
  initWebSocket() {
    try {
      //timer为发送心跳的计时器
      this.timer && clearInterval(this.timer);
      this.ws = new WebSocket(url);
      this.initWsEvent();
    } catch (e) {
      console.log('WebSocket err:', e);
      //重连
      this.reconnect();
    }
  }

  /**
   * 初始化WebSocket相关事件
   */
  initWsEvent() {

    if (!this.ws) {
      throw new Error('WebSocket: WebSocket对象为null');
    }

    let that = this;
    //建立WebSocket连接
    this.ws.onopen = function () {
      console.log('WebSocket:', '已连接到服务器');
    };

    //客户端接收服务端数据时触发
    this.ws.onmessage = function (evt) {

      if (evt.data === 'PONG') {
        console.log('WebSocket: 服务器消息: ', evt.data);
        that.noPongSecond = 0;
      }else {
        console.log('WebSocket: 服务器消息: ', evt.data);
        //接收到消息，处理逻辑...
      }

    };
    //连接错误
    this.ws.onerror = function (err) {
      console.log('WebSocket:', `连接服务器错误(${new Date()}).`);
      //重连
      that.reconnect();
    };
    //连接关闭
    this.ws.onclose = function () {
      console.log('WebSocket:', '连接关闭');
      that.timer && clearInterval(that.timer);
      //重连
      that.reconnect();
    };

    // 定时器，每秒操作
    this.timer = setInterval(() => {

      // 发送心跳
      this.heartCheckCount++;
      if (this.heartCheckCount > this.heartCheckMAXCount) {
        this.heartCheckCount = 0;
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
          console.log('WebSocket:', '发送心跳ping');
          this.sendMessage('PING');
        }
      }

      // 检查心跳回馈，若长时间没有回馈则说明断线
      this.noPongSecond++;
      if (this.noPongSecond > this.noPongMaxSecond) {
      }

    }, 1000);
  }

  //发送消息
  sendMessage(msg: string) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      try {
        this.ws.send(msg);
      } catch (err) {
        console.warn('ws 发送消息: ', err.message);
      }
    } else {
      console.log('WebSocket:', '尚未连接服务器，无法发送消息');
    }
  }

  //重连
  reconnect() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      //重新连接WebSocket
      this.initWebSocket();
    }, 15000);
  }

  close() {
    this.ws?.close();
  }
}