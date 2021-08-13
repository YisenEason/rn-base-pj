import React, { useEffect, useState } from "react";
import { Platform, StatusBar, StatusBarStyle, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { NativeModules } from 'react-native';
import { Nav_BackgroundColor, Nav_Icon_Color, Nav_Title_Color } from "../../../constant/Theme";
import { useHeaderHeight } from '@react-navigation/elements';

type Props = {

  // 部分页面单独设置标题栏
  children?: React.ReactNode,
  style?: ViewStyle,

  barStyle?: StatusBarStyle,

  title?: string,

  leftIcon?: string,
  leftTitle?: string,
  leftAction?: ()=>void

  rightIcon?: string,
  rightTitle?: string,
  rightAction?: ()=>void

  // 隐藏底下阴影, 仅android
  hideBottomShadow?: boolean;
}

const navH = Platform.OS === 'android' ? 54 : 44;

const Header: React.FC<Props> = (props) => {

  const h = useHeaderHeight();
  console.log(h);
  

  const [ statusH, setStatusH ] = useState(20);

  useEffect(()=>{
    // if (Platform.OS === 'android') {
    //   const statusBarHeight = StatusBar.currentHeight;
    //   setStatusH(statusBarHeight || 20)
    // }else {
    //   const { StatusBarManager } = NativeModules;
    //   StatusBarManager.getHeight((status:any) => {
    //     setStatusH(status.height);
    //   });
    // }
  }, [])

  let leftView = props.leftAction ? (
    <TouchableOpacity style={styles.left_container} onPress={props.leftAction}>
      <Icon style={{ marginRight: 5 }}
        name={props.leftIcon ? props.leftIcon : 'arrow-back-outline'}
        size={22}
        color={Nav_Icon_Color}
      />
      <Text>{props.leftTitle}</Text>
    </TouchableOpacity>
  ) : null;

  let titleView = (
    <View style={styles.title_container}>
      <Text style={styles.title}>{props.title || '默认'}</Text>
    </View>
  )

  let rightView = props.rightAction ? (
    <TouchableOpacity style={styles.right_container} onPress={props.rightAction}>
      <Icon style={{ marginRight: 2 }}
        name={props.rightIcon ? props.rightIcon : 'hand-right-outline'}
        size={24}
        color={Nav_Icon_Color}
      />
      <Text>{props.rightTitle}</Text>
    </TouchableOpacity>
  ) : null;

  return (
    <View style={[{backgroundColor: Nav_BackgroundColor, elevation: props.hideBottomShadow?0:1, height: h}, {...props.style}]}>
      <View style={{height: statusH}}>
        <StatusBar barStyle={props.barStyle || 'dark-content'} translucent backgroundColor="transparent"/>
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
};

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
    fontSize: 18,
    fontWeight: 'bold',
    color: Nav_Title_Color
  },
  left_container: {
    position: 'absolute', 
    left: 0, 
    flexDirection: 'row', 
    paddingHorizontal: 11, 
    height: navH, 
    alignItems:'center',
    minWidth: 60,
  },
  right_container: {
    position: 'absolute', 
    right: 0,
    flexDirection: 'row', 
    paddingHorizontal: 11, 
    height: navH, 
    alignItems:'center',
    minWidth: 60,
  },
});

export default Header;