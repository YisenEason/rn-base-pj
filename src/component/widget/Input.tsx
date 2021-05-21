import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

type Props = {
  label?: String;
}

const Input: React.FC<Props & TextInputProps> = (props) => {
  return (
    <View style={styles.container}>
      {
        props.label && props.label?.length > 0 && 
        <Text style={{paddingHorizontal: 10, fontSize: 17}}>{props.label}</Text>
      }
      <TextInput {...props} style={{fontSize: 17, flex: 1}}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', 
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
  }
})

export default Input;