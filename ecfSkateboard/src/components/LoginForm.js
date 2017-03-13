import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { connect } from 'react-redux';
import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner
} from './common';
import { emailChanged, passwordChanged, loginUser } from '../redux/authReducer';
import logo from '../assets/logo.jpg';

class LoginForm extends Component {

  handleEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  handlePasswordChange = (text) => {
    this.props.passwordChanged(text);
  }

  handleButtonPress = () => {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButtonOrSpinner() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.handleButtonPress}>
        Login
      </Button>
    );
  }

  render() {
    const { email, password, error } = this.props;
    const { errorTextStyle, logoImageStyles, logoContainerStyles } = styles;
    return (
      <Card>
          <CardSection style={logoContainerStyles}>
            <Image
                source={logo}
                style={logoImageStyles}
            />
          </CardSection>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.handleEmailChange}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.handlePasswordChange}
            value={password}
          />
        </CardSection>
        <Text style={errorTextStyle}>
          {error}
        </Text>
        <CardSection>
          {this.renderButtonOrSpinner()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  },
  logoImageStyles: {
      height: 50,
      width: 110
  },
  logoContainerStyles: {
      justifyContent: 'center'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
   };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
