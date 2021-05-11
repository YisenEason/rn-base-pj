import MockAdapter from 'axios-mock-adapter';

/**
 * Mock工具类
 * 接口数据Mock
 * 使用方式：
 * // const mock = new Mock(axios);
 * // mock.mockFunction();
 */
class Mock {

  // mock adapter
  mock: any;

  constructor(axios: any) {
    this.mock = new MockAdapter(axios, { onNoMatch: "passthrough" });
  }
  
  mockTest() {
    // let api = '/mock';
    // this.mock.onGet(new RegExp(`.*${api}.*`)).reply((config:any)=>{
    //   return [
    //     200,
    //     {
    //       code: 200, 
    //       data: null, 
    //       message: "系统正在处理"
    //     },
    //   ];
    // });
  }
}

export default Mock;
