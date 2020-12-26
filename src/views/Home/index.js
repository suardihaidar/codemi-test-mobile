import React from 'react';
import {SafeAreaView, View, Text, Alert, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  // redux
  const user = useSelector((state) => state.activeUser);
  const userData = user[0];

  // function
  const onSuccess = (e) => {
    Alert.alert('', `username : ${e.data}`);
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <QRCode value={userData.username} />
      </View>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
