import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {setActiveUser} from '../../redux/action';

const Login = ({navigation}) => {
  // hooks
  const [email, setEmail] = useState('');
  // redux
  const dataUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const setUser = (mail) => dispatch(setActiveUser(mail));

  // function
  const login = () => {
    const validateEmail = dataUser.some((el) => el.email === email);
    if (validateEmail) {
      const filterUser = dataUser.filter((val) => val.email === email);
      setUser(filterUser);
      setEmail('');
      navigation.navigate('home');
    } else {
      Alert.alert('', 'Email not found, try again');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Text style={styles.txtHeader}>Welcome</Text>
      <View style={styles.wrapperInfo}>
        <Text style={styles.txtInfo}>user 1 : user1@mail.com</Text>
        <Text style={styles.txtInfo}>user 2 : user2@mail.com</Text>
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          style={styles.txtInput}
          onChangeText={(val) => setEmail(val)}
          placeholder="please enter your email address"
          value={email}
          autoFocus
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => login(email)}>
        <Text style={styles.txtButton}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#31326f',
    margin: 50,
    borderRadius: 25,
    padding: 10,
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInput: {
    height: 40,
    width: 300,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  txtButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  txtHeader: {
    fontSize: 18,
    marginTop: 50,
    fontWeight: 'bold',
  },
  wrapperInfo: {
    backgroundColor: '#d0e8f2',
    borderRadius: 5,
    padding: 5,
    marginVertical: 30,
  },
  txtInfo: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.7)',
    fontWeight: '600',
  },
});
