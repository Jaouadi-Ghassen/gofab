import {StyleSheet} from 'react-native';

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
    marginTop: '10%',
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  btnContainer: {
    width: '100%',
    lineHeight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '27%',
  },
});

export default styles;
