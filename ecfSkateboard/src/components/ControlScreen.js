import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { SliderBar, Button, CardSection, Gauge } from './common';
import { handleSetPower } from '../redux/powerReducer';
import { toggleLights } from '../redux/lightsReducer';
import logo from '../assets/logo.jpg';

class ControlScreen extends Component {
    render() {
        const { logoImageStyles, gaugeContainer } = styles;
        const { powerlevel, lights } = this.props;
        return (
            <View>
                <CardSection>
                    <Image
                        source={logo}
                        style={logoImageStyles}
                    />
                </CardSection>
                <CardSection style={gaugeContainer}>
                    <View>
                        <Gauge
                            value={30}
                            label={'Km/h'}
                        />
                    </View>
                    <View>
                        <Gauge
                            value={50}
                            label={'RPM'}
                        />
                    </View>
                </CardSection>
                <CardSection>
                    <SliderBar
                      minimumValue={1500}
                      maximumValue={2100}
                      label={'Power'}
                      value={powerlevel}
                      onSlidingComplete={(value) => this.props.handleSetPower(value)}
                    />
                </CardSection>
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

const styles = {
    logoImageStyles: {
        height: 50,
        width: 110
    },
    gaugeContainer: {
        justifyContent: 'space-around'
    }
};
export default connect(mapStateToProps, { handleSetPower, toggleLights })(ControlScreen);
