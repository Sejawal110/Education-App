import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../CourseApi/CourseArray'
import { FlatList } from 'react-native-gesture-handler'

export default function CourseScreen({navigation}: {navigation: any}) {


  function courseCards ({item}: {item: any}) {
    return   <View style={styles.card}>
    <Image 
      source={item.image} 
      style={styles.image} 
    />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description} >
      {item.description}
    </Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
      <Text style={styles.buttonText}>Course Details</Text>
    </TouchableOpacity>
  </View>

  }



  return (
    <FlatList 
    keyExtractor={(item) => item.id }
    data={Courses} 
    renderItem={courseCards}

    />
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: 350,
    height: 220,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7E60BF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

})