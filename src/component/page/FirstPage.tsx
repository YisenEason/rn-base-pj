import React, { useEffect, useState } from "react";
import { Alert, Button, InteractionManager, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Network from "../../helper/utils/Network";
import ModalUtil from "../../helper/utils/ModalUtil";
// import Header from "../widget/common/Header";
import { StackNavigationProp } from '@react-navigation/stack';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { sp } from "../../helper/utils/ScreenUtil";
import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/native-stack';
import { Header } from '@react-navigation/elements';

type Props = {
} & NativeStackScreenProps<{}>;

const FirstPage = ({navigation, route}: Props) => {
    
  useEffect(()=>{
    navigation.setOptions({
      header: ()=>(<Header modal={false} title='abc' headerStyle={{backgroundColor: 'red'}}></Header>)
    });
  }, []);

  return (
    <View style={{marginTop: 200}}>
      <Button title="network post" onPress={() => {

        ModalUtil.loadingModal();

        // Network.post(`https://api.muxiaoguo.cn/api/tianqi?city=长沙&type=1`, {}, {})
        //   .then((e) => {
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //   }).finally(() => {
        //   })

      }}></Button>
      <Button title="loading" onPress={() => {
        // Network.get('http://localhost:8080/mock', null).catch(()=>{});
        // ModalUtil.loadingModal();
        navigation.push('LoginPage', {});
      }}></Button>
    </View>
  );
}

export default FirstPage;