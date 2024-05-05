import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View, Image} from 'react-native';
import styles from './SplashStyle';
import ButtonComponent from '../../components/Button/ButtonComponent';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

function SplashScreen({navigation}: Props) {
  const handleSubmit = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContaner}>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
      </View>
      <Text style={styles.text}>مرحبا بك في علمني، هل أنت</Text>
      <View style={styles.btnContainer}>
        <ButtonComponent
          title="تلميذ"
          onPress={handleSubmit}
          variant="primary"
        />
        <ButtonComponent
          title="مدرس"
          onPress={handleSubmit}
          variant="secondary"
        />
      </View>
    </View>
  );
}

export default SplashScreen;
