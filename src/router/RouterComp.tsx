import * as React from 'react';
import { createNavigationContainerRef, NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingModal from '../component/modal/LoadingModal';
import FirstPage from '../component/page/FirstPage';
import LoginPage from '../component/page/Login/LoginPage';
import Header from '../component/widget/common/Header';

const RootStack = createNativeStackNavigator();

export let rootNavRef: NavigationContainerRef = createNavigationContainerRef();

const RouterComp = () => {
  return (
    <NavigationContainer ref={rootNavRef}>
      <RootStack.Navigator initialRouteName="FirstPage">
        <RootStack.Group>
          <RootStack.Screen name="FirstPage" component={FirstPage} options={{}}/>
          <RootStack.Screen name="LoginPage" component={LoginPage} options={{animation: 'slide_from_right'}}/>
        </RootStack.Group>
        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen name="LoadingModal" component={LoadingModal} options={{}} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RouterComp;