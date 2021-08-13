import { Alert } from "react-native";
import { rootNavRef } from "../../router/RouterComp";

function loadingModal(msg?: string) {
  rootNavRef?.navigate('LoadingModal');
}

function showConfirmModal(title: string, msg: string, comfirmHandle: ()=>void) {
  Alert.alert(title, msg, [{
    text: '取消',
    onPress:()=>{
      console.log('取消');
      
    }},{
    text: '确认',
    onPress:()=>{
      console.log('确认');
      comfirmHandle();
    }
  }])
}

export default {
  loadingModal
};