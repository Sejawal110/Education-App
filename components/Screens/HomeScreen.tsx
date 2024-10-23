import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


const HomeScreen = ({navigation}:{navigation: any}) => {

    
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={require("../../assets/images/index.jpg")}
        style={styles.topImage}
      />

      
      <View style={styles.welcomeSection} >
        <Text style={styles.title}>Welcome to EduApp</Text>
        <Text style={styles.description}>
          Your one-stop solution to learning, growth, and success. Dive into our expert-curated content and start your learning journey today!
        </Text>
      </View>


      <View style={styles.coursesContainer} >
        <Text style={styles.sectionTitle}>Popular Courses</Text>
        
        <TouchableOpacity style={styles.courseCard}> 
          <Text style={styles.courseTitle}>React Native Development</Text>
          <Text style={styles.courseDescription}>Learn how to build mobile apps with React Native</Text>
        </TouchableOpacity>

       
        
        <TouchableOpacity style={styles.courseCard} >
          <Text style={styles.courseTitle}>Frontend Development</Text>
          <Text style={styles.courseDescription}>Become an expert in HTML, CSS, and JavaScript</Text>
        </TouchableOpacity>
      </View>



    
      <View style={styles.buttonContainer} >
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Courses')}} >
          <Text style={styles.buttonText}>Browse Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.outlineButton]} onPress={() => {navigation.navigate('Sign Up')}} >
          <Text style={[styles.buttonText, styles.outlineButtonText]}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>
      
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  topImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },

  welcomeSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outlineButton: {
    backgroundColor: '#fff',
    borderColor: '#007bff',
    borderWidth: 2,
  },
  outlineButtonText: {
    color: '#007bff',
  },

  coursesContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  courseCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  courseDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },

  
});

export default HomeScreen;