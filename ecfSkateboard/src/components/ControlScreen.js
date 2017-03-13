import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { SliderBar, Button, CardSection } from './common';
import { handleSetPower } from '../redux/powerReducer';
import { toggleLights } from '../redux/lightsReducer';

class ControlScreen extends Component {
    render() {
        const { powerlevel, lights } = this.props;
        return (
            <View>
                  <SliderBar
                    minimumValue={1500}
                    maximumValue={2100}
                    label={'Power'}
                    value={powerlevel}
                    onSlidingComplete={(value) => this.props.handleSetPower(value)}
                  />
                  <CardSection>

                    <Button
                      onPress={() => this.props.toggleLights(lights)}
                    >
                      Lights
                    </Button>
                  </CardSection>
                  <CardSection>
                      <Text>
                          {
                              lights ? 'LIGHTS ARE ON' : 'LIGHTS ARE OFF'
                          }
                      </Text>
                  </CardSection>

          </View>
        );
    }
}
const mapStateToProps = ({ power, lights }) => {
    return {
        powerlevel: power.powerlevel,
        lights: lights.lightsToggle
    };
};

export default connect(mapStateToProps, { handleSetPower, toggleLights })(ControlScreen);
