import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'

const Home = ({ user }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Hello, ${user.nickname}!`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    width: null,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: '#000',
    marginVertical: 72
  }
})

Home.propTypes = {
  user: PropTypes.object.isRequired
}

export default Home
