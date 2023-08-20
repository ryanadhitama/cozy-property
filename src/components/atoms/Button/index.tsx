import { colors, fonts } from '@utils';
import React from 'react';
import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

type ButtonProps = {
  title?: string;
  type?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const Button = ({ type, title, onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity style={[ContainerStyles(type as string), style]} onPress={onPress}>
      <Text style={TextStyles()}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const ContainerStyles = (type: string): ViewStyle => ({
  backgroundColor: type === 'secondary' ? colors.secondary : colors.primary,
  paddingVertical: 12,
  borderRadius: 17
});

const TextStyles = (): TextStyle => ({
  fontSize: 18,
  fontFamily: fonts.primary[500],
  textAlign: 'center',
  color: colors.white
});
