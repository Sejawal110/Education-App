import { StyleSheet, Text, View, Image } from 'react-native'
import Students from '../CourseApi/StudentsApi'
import { FlatList } from 'react-native-gesture-handler'

export default function StudentsScreen() {

  
  const studendtsData = ({item}: {item: any}) => {
    return (
      <View style={styles.card}>
      <Image 
        source={item.image} 
        style={styles.image} 
      />
      <Text style={styles.id}>{item.id}.</Text>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.phone}>Phone: {item.phone}</Text>
      <Text style={styles.description}>
        {item.description}
      </Text>
      
    </View>

    )
  }



  return (
    <View>
    <Text style={styles.header}>List of Students</Text>
    <FlatList
    keyExtractor={(item) => item.id}
    data={Students} renderItem={studendtsData} />
  
    </View>
  )
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 10,
    alignItems: 'center',
    elevation: 5, // For Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },




  header: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15
  },



  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },

  id: {
    marginTop: 7,
    fontSize: 17
  },

  phone: {
    fontSize: 19,
    marginBottom: 8
  },

})