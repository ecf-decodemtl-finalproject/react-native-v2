import React from 'react';
import { View, Slider, Text } from 'react-native';

const SliderBar = ({
  minimumValue,
  maximumValue,
  onSlidingComplete,
  label,
  value
 }) => {
  const { containerStyles, textStyle } = styles;
  return (
    <View style={containerStyles}>
      <Text style={textStyle}>{label}: {value}</Text>
      <Slider
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        onSlidingComplete={onSlidingComplete}
      />
    </View>
  );
};
const styles = {
  containerStyles: {
    flex: 1,
    justifyContent: 'center',
    padding: 40
  },
  textStyle: {
    fontSize: 18
  }
};
export { SliderBar };
