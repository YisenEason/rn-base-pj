import React from "react";
import { Button, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { SafeAreaView } from "react-native-safe-area-context";
import Network from "../../helper/manager/Network";
import BasePage, { BasePageState } from "./BasePage";

export default class TwoPage extends BasePage<{}> {

  state: BasePageState = {}

  render() {
    return (
      <View>
        <SafeAreaView>
          <Button title="111" onPress={() => {
            Actions.pop();
          }}></Button>
          <Button title="222" onPress={() => {
          }}></Button>
        </SafeAreaView>
      </View>

    )
  }

}