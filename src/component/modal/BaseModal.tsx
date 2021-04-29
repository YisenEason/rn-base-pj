import React from 'react';
import { Dimensions, Modal, StyleSheet, View } from 'react-native';

type Props = {
  children?: JSX.Element
}

const BaseModal: React.FC<Props> = ({children}) => {

  // useEffect(()=>{
  //   maskOpacity.value = withTiming(0.2);
  //   childOpacity.value = withTiming(1);
  // }, []);

  // const maskOpacity = useSharedValue(0);
  // const maskAnimatedStyle = useAnimatedStyle(()=>{
  //   return {
  //     opacity: maskOpacity.value,
  //   }
  // })
  // const childOpacity = useSharedValue(0);
  // const childAnimatedStyle = useAnimatedStyle(()=>{
  //   return {
  //     opacity: childOpacity.value,
  //   }
  // })

  return (
    <Modal transparent={true} animationType='fade' statusBarTranslucent>
        <View style={styles.container}>
          {children}
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
})

export default BaseModal;