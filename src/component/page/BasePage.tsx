import React from "react";
import { View } from "react-native";

export interface BasePageProps {

}

export interface BasePageState {

}

export default class BasePage<T> extends React.Component <T> {

  state: BasePageState = {}

  constructor(props: T) {
    super(props);
  }

  render () {
    return (
      <View />
    );
  }
}