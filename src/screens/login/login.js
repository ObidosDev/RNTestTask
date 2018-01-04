import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nickname: undefined,
      password: undefined
    }
  }

  _onNicknameChange = nickname => {
    this.setState({
      nickname: nickname.trim()
    })
  }

  _onPasswordChange = password => {
    this.setState({
      password: password
    })
  }

  _login = () => {
    const { nickname, password } = this.state
    let errorMsg = ''
    if (!nickname) {
      errorMsg += '\nEnter nickname'
    }
    if (!password) {
      errorMsg += '\nEnter password'
    }
    if (errorMsg) {
      alert(errorMsg.substr(1))
    } else {
      this.props.login(nickname, password)
    }
  }

  _renderInputRow = (placeholder, value, onTextChange, isPassword, icon) => {
    return (
      <View style={styles.inputContainer}>
        <Icon name={icon} size={35} color={'#000'} />
        <TextInput
          underlineColorAndroid="transparent"
          multiline={false}
          style={styles.input}
          secureTextEntry={isPassword}
          placeholder={placeholder}
          onChangeText={nickname => onTextChange(nickname)}
          value={value}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
    )
  }

  render() {
    const { nickname, password } = this.state
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={styles.scrollContainer}
      >
        <KeyboardAvoidingView style={styles.container} behavior={'position'}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{'Welcome'}</Text>
          </View>

          {this._renderInputRow(
            'Nickname',
            nickname,
            this._onNicknameChange,
            false,
            'ios-person'
          )}
          {this._renderInputRow(
            'Password',
            password,
            this._onPasswordChange,
            true,
            'ios-lock'
          )}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              backgroundColor="rgba(159, 83, 169, 1)"
              onPress={this._login}
            >
              <Text style={styles.buttonTitle}>{'LOGIN'}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
    padding: 30,
    flexDirection: 'column'
  },
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  titleContainer: {
    width: null,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginVertical: 72
  },
  buttonContainer: {
    marginTop: 35,
    width: null,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  buttonTitle: {
    fontSize: 24,
    color: 'green'
  },
  inputContainer: {
    marginBottom: 16,
    flex: 1,
    height: null,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    flex: 1,
    padding: 8,
    marginLeft: 16,
    height: Platform.OS === 'ios' ? 30 : null,
    color: '#000',
    fontSize: 16
  }
})

Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default Login
