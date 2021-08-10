import { Alert } from "react-native";
import { Actions } from "react-native-router-flux";

function loadingModal(msg?: string) {
  Actions.LoadingModal({title: msg});
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