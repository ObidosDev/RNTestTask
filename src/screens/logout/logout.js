import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Logout = ({ logout }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{'Good Bye'}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          backgroundColor={'rgba(159, 83, 169, 1)'}
          onPress={logout}
        >
          <Text style={styles.buttonTitle}>{'LOG OUT'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    flexDirection: 'column'
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
  }
})

Logout.propTypes = {
  logout: PropTypes.func.isRequired
}

export default Logout
