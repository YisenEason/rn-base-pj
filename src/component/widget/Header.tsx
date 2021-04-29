import React, { useEffect, useState } from "react";
import { Dimensions, Platform, StatusBar, StatusBarStyle, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeModules } from 'react-native';
import Color from "../../constant/Color";

type Props = {
  children?: React.ReactNode,
  style?: ViewStyle,
  barStyle?: StatusBarStyle,

  title?: string,

  leftIcon?: string,
  leftTitle?: string,

  rightIcon?: string,
  rightTitle?: string,
}

const { width, height } = Dimensions.get('window');

const navH = Platform.OS === 'android' ? 54 : 44;

const Header: React.FC<Props> = (props) => {

  const [ statusH, setStatusH ] = useState(20);

  useEffect(()=>{
    if (Platform.OS === 'android') {
      // const statusBarHeight = StatusBar.currentHeight;
      // setStatusH(statusBarHeight || 20)
    }else {
      const { StatusBarManager } = NativeModules;
      StatusBarManager.getHeight((status:any) => {
        setStatusH(status.height);
      });
    }
  })

  let leftView = (
    <TouchableOpacity style={styles.left_container}>
      <Icon style={{ marginRight: 2 }}
        name={props.leftIcon ? props.leftIcon : ''}
        size={24}
        color={Color._22254c}
      />
      <Text>{props.leftTitle}</Text>
    </TouchableOpacity>
  )

  let titleView = (
    <View style={styles.title_container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )

  let rightView = (
    <TouchableOpacity style={styles.right_container}>
      <Icon style={{ marginRight: 2 }}
        name={props.rightIcon ? props.rightIcon : ''}
        size={24}
        color={Color._22254c}
      />
      <Text>{props.rightTitle}</Text>
    </TouchableOpacity>
  )

  let navBgColor = Color.default_backgroundColor;
    
  return (
    
    <View style={[{backgroundColor: navBgColor}, {...props.style}]}>
      <View style={{height: statusH, width:width}}>
        <StatusBar barStyle={props.barStyle} translucent backgroundColor="transparent"/>
      </View>
      {
        props.children === undefined &&
        <View style={styles.main_container}>
          {titleView}
          {leftView}
          {rightView}
        </View>
      }
      {
        props.children !== undefined &&
        props.children
      }
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    justifyContent:'space-between', 
    alignItems:'center', 
    flexDirection: 'row'
  },
  title_container: {
    alignItems: 'center',
    height: navH,
    justifyContent:'center',
    flex: 1
  },
  title: {
    fontSize: 18
  },
  left_container: {
    position: 'absolute', 
    left: 0, 
    flexDirection: 'row', 
    paddingHorizontal: 8, 
    height: navH, 
    alignItems:'center'
  },
  right_container: {
    position: 'absolute', 
    right: 0,
    flexDirection: 'row', 
    paddingHorizontal: 8, 
    height: navH, 
    alignItems:'center'
  },
});

export default Header;