import React from "react";
import { Alert, Button, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { SafeAreaView } from "react-native-safe-area-context";
import Network from "../../helper/manager/Network";
import ModalUtil from "../../helper/utils/ModalUtil";
import Header from "../widget/Header";
import BasePage, { BasePageState } from "./BasePage";

export default class FirstPage extends BasePage<{}> {

  state: BasePageState = {}

  tmp() {
    return (
      <View style={{backgroundColor: 'green'}}><Text>abc</Text></View>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header barStyle='dark-content' title='title'></Header>
        <SafeAreaView>
          <Button title="network post" onPress={() => {
            ModalUtil.loadingModal();
            Network.post(`https://api.muxiaoguo.cn/api/tianqi?city=长沙&type=1`, {}, {})
              .then((e) => {
              })
              .catch((e) => {
                console.log(e);
              }).finally(()=>{
                setTimeout(() => {
                  Actions.pop();
                }, 300);
              })
          }}></Button>
          <Button title="loading" onPress={() => {
            Network.get('http://localhost:8080/mock', null).catch(()=>{});
          }}></Button>
        </SafeAreaView>
      </View>

    )
  }

}