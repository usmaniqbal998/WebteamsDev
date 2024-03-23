import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'

const fetchData = async () => {
  try {
    const response = await fetch('https://apiExample.com/posts')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch data:', error)
  }
}

const ListItem = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData().then(setData)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem title={item.title} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 16
  }
})

export default App
