import React from "react";
import { Button, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { SafeAreaView } from "react-native-safe-area-context";
import Network from "../../helper/manager/Network";
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
            Actions.LoadingModal();
            Network.post(`https://api.muxiaoguo.cn/api/tianqi?city=长沙&type=1`, {}, {})
              .then((e) => {  
              })
              .catch((e) => {

              }).finally(()=>{
                Actions.pop();
              })
          }}></Button>
          <Button title="loading" onPress={() => {
            Actions.LoadingModal({
              title: 'abc'
            });
            setTimeout(() => {
              Actions.pop();
            }, 1000);
          }}></Button>
        </SafeAreaView>
      </View>

    )
  }

}