import React from 'react';
import { View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Gauge = ({ value, label }) => {

    const { valueContainter, valueText } = styles;

    return (
        <View>
            <AnimatedCircularProgress
              size={120}
              width={15}
              fill={value}
              tintColor="#00e0ff"
              backgroundColor="#3d5875"
              value={value}
            >
                {
                    () => {
                        return (
                            <View style={valueContainter}>
                                <Text style={valueText}>
                                    {`${value} ${label}`}
                                </Text>
                            </View>
                        );
                    }
                }
            </AnimatedCircularProgress>
        </View>
    );
};
const styles = {
    valueContainter: {
        zIndex: 2,
        position: 'absolute',
        left: 25,
        top: 50
    },
    valueText: {
        fontSize: 18
    }
};
export { Gauge };
