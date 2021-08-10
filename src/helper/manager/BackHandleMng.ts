import { BackHandler, Platform } from "react-native";

/**
 *  用于Android端返回键或者侧滑返回的监听
 */
class BackHandleMng {

  constructor() {
  }

  addInterception() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  removeInterception() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid() {
    console.log('监听到点击返回键');
    
    // 处理，需要哪些页面进行哪些逻辑处理可在这里进行
    // 允许执行系统返回逻辑，return false;
    // 禁止系统返回逻辑，return true;
    return true;
  }

}

const backHandleManager = new BackHandleMng();

export default backHandleManager;