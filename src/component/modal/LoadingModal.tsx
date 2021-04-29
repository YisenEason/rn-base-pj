import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import BaseModal from './BaseModal';

type Props = {
  title?: string;
}

const LoadingModal = ({title}: Props) => {

  return (
    <BaseModal>
      <View style={styles.container}>
        <View style={[styles.loadingContainer, title?{paddingVertical:20}:{}]}>
          <ActivityIndicator color='gray' size='large' />
          {
            title ?
            <Text style={{marginTop: 8}}>{title}</Text>
            :
            null
          }
        </View>
      </View>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    // height: 100,
    // width: 100,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LoadingModal;