import React from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import Network from "../../../helper/utils/Network";
import ModalUtil from "../../../helper/utils/ModalUtil";
import { addAction } from "../../../redux/actions/TestActions";
import Header from "../../widget/Header";
import Input from "../../widget/Input";

export default class LoginPage extends React.Component {

  username: String = '';
  password: String = '';

  constructor(props:any) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    
    const { addAction } = this.props;

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
            // Alert.alert(`${this.username}\n${this.password}`);
            // Actions.push('FirstPage');
            addAction(11);
          }} style={{width: '100%', alignItems:'center', justifyContent:'center', height:44}}>
            <Text>Login</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    )
  }

}