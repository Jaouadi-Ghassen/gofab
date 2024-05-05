import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import ButtonComponent from '../../components/Button/ButtonComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

function LoginScreen({navigation}: Props) {
  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/logo.png')} />
      <Text style={styles.text}>مرحبا بك</Text>
      <TextInput style={styles.input}>ادخل المعرف الوحيد</TextInput>
      <TextInput style={styles.input}>ادخل رقمك السري</TextInput>
      <View style={styles.btnContainer}>
        <ButtonComponent
          title="تسجيل الدخول"
          onPress={handleSubmit}
          variant="primary"
        />
        <Text style={styles.text1}> لدي حساب</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'cover',
  },
  text: {
    marginTop: '10%',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  btnContainer: {
    marginTop: '5%',
    width: '100%',
    lineHeight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20%',
  },
  text1: {
    marginTop: '5%',
    textDecorationLine: 'underline',
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(240, 238, 240, 1)',
    marginTop: '5%',
    borderRadius: 10,
    paddingHorizontal: 10,
    elevation: 2,
  },
});

export default LoginScreen;
