import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const _renderSeparator = () => {
  return <View style={styles.separator} />
}

const _renderItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  )
}

const Stackoverflow = ({ itemsData, fetchItems }) => {
  let items = undefined
  let inProgress = false
  if (itemsData && itemsData['react-native']) {
    items = itemsData['react-native'].items
    inProgress = itemsData['react-native'].inProgress
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={_renderItem}
        keyExtractor={item => item.question_id}
        ItemSeparatorComponent={_renderSeparator}
        refreshing={inProgress}
        onRefresh={() => fetchItems('react-native')}
        onEndReached={() => {
          let nextPage = undefined
          if (itemsData && itemsData['react-native']) {
            nextPage = itemsData['react-native'].nextPage
          }
          fetchItems('react-native', nextPage)
        }}
        onEndReachedThreshold={1}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  itemContainer: {
    padding: 16
  },
  itemText: {
    fontSize: 16,
    color: '#000'
  },
  separator: {
    height: 1,
    backgroundColor: '#CED0CE'
  }
})

Stackoverflow.propTypes = {
  itemsData: PropTypes.object,
  fetchItems: PropTypes.func.isRequired
}

export default Stackoverflow
