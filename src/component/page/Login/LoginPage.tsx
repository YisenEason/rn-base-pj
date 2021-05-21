import React from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { SafeAreaView } from "react-native-safe-area-context";
import Network from "../../../helper/manager/Network";
import ModalUtil from "../../../helper/utils/ModalUtil";
import Header from "../../widget/Header";
import Input from "../../widget/Input";
import BasePage, { BasePageState } from "../BasePage";

export default class LoginPage extends BasePage<{}> {

  state: BasePageState = {};

  username: String = '';
  password: String = '';

  render() {
    return (
      <View style={{flex: 1}}>
        <Header barStyle='dark-content' title='login'></Header>
        <SafeAreaView>
          <Input label='username:' placeholder='input' onChangeText={(text)=>{
            this.username = text;
          }}></Input>
          <Input label='password:' placeholder='input' onChangeText={(text)=>{
            this.password = text;
          }}></Input>
          <TouchableOpacity onPress={()=>{
            Alert.alert(`${this.username}\n${this.password}`);
            Actions.push('FirstPage');
          }} style={{width: '100%', alignItems:'center', justifyContent:'center', height:44}}>
            <Text>Login</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    )
  }

}