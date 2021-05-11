import { Actions } from "react-native-router-flux";

function loadingModal(msg?: string) {
  Actions.LoadingModal({title: msg});
}

export default {
  loadingModal
};