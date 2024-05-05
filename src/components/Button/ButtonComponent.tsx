import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant: 'primary' | 'secondary';
}

const ButtonComponent: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant,
}) => {
  const buttonStyle =
    variant === 'primary' ? style.primaryButton : style.secondaryButton;
  const textStyle =
    variant === 'primary' ? style.primaryButtonText : style.secondaryButtonText;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  primaryButton: {
    backgroundColor: 'rgba(2, 72, 173, 1)',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    marginBottom: '5%',
    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: 'black',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    borderWidth: 1,
    borderColor: '#182A4D',
    elevation: 5,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',
  },
  secondaryButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'normal',
  },
});

export default ButtonComponent;
