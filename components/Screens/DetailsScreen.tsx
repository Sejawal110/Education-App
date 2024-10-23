import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList  } from 'react-native'

import Courses from '../CourseApi/CourseArray';


export default function DetailsScreen({navigation}: {navigation: any}) {

  function courseCards ({item}: {item: any}) {
    return   <View style={styles.card}>
    <Image 
      source={item.image} 
      style={styles.image} 
    />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.course}>{item.Course1} </Text>
    <Text style={styles.course}> {item.Course2} </Text>
    <Text style={styles.course}> {item.Course3} </Text>
    <Text style={styles.description} >
      {item.description}

     
    </Text>
    <View style={styles.btnContainer}>
    <TouchableOpacity style={styles.button1} >
      <Text style={styles.buttonText1}>{item.Price}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Join Now')}>
      <Text style={styles.buttonText1}>Enroll Now</Text>
    </TouchableOpacity>
    </View>
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
    marginTop: 22,
    fontWeight: 'bold'
  },
  button1: {
    backgroundColor: '#FF4191',
    paddingVertical: 10,
    paddingHorizontal: 25,
    
  
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',

  },

  btnContainer: {
    flexDirection: 'row'
  },

  button2: {
    backgroundColor: '#AD49E1',
    paddingVertical: 10,
    paddingHorizontal: 25,
    
  },

  course: {
    fontSize: 17,
    fontWeight: '600',
    
    
  },
})