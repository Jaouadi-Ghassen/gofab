import {Image, StyleSheet, Text, View} from 'react-native';
import ButtonComponent from '../../components/Button/ButtonComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

function HomeScreen({navigation}: Props) {
  const handleSubmit = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/image1.png')} />
      <Text style={styles.text}>
        عسلامة خليل، بش نعملو تقييم نحددو شنوة نحسنو
      </Text>
      <View style={styles.btnContainer}>
        <ButtonComponent
          title="باهي"
          onPress={handleSubmit}
          variant="primary"
        />
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
    width: 280,
    height: 280,
    resizeMode: 'cover',
    marginBottom: '15%',
  },
  imageContaner: {
    height: '50%',
    width: '100%',
    backgroundColor: 'rgba(205, 224, 251, 1)',
    borderBottomLeftRadius: 250,
    // top: -130,
    alignItems: 'center',
    marginTop: '-25%',
  },
  text: {
    width: '70%',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnContainer: {
    width: '100%',
    lineHeight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
});

export default HomeScreen;
