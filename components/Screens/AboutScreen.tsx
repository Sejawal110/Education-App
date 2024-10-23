import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;

export default function AboutUs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/my.jpg')} style={styles.image} />
      </View>

      
      <View style={styles.card}>
        <Text style={styles.header}>About Us</Text>
        <Text style={styles.description}>
          Welcome to our education app! We are dedicated to transforming the learning experience by making high-quality educational resources available to everyone. Our app provides personalized learning paths, interactive courses, and real-time feedback to help students succeed in their academic journey.
        </Text>
      </View>

      
      <View style={styles.card}>
        <Text style={styles.subheader}>Meet the Founder</Text>
        <Text style={styles.founderInfo}>
          <Text style={styles.boldText}>Sejawal Ali</Text>, the visionary behind this app, is a passionate educator and technologist with a mission to innovate the way we learn. With expertise in business administration and education, <Text style={styles.boldText}>Sejawal</Text> strives to make learning more accessible and engaging for students everywhere.
        </Text>
      </View>

      
      <View style={styles.card}>
        <Text style={styles.subheader}>Our Mission</Text>
        <Text style={styles.mission}>
          Our mission is to provide an exceptional learning platform that caters to individual student needs, promotes self-paced learning, and helps every learner achieve their full potential.
        </Text>
      </View>

      <View style={styles.borderLine}>

      </View>

      
      <View style={styles.linksContainer}>
        <TouchableOpacity  onPress={() => Linking.openURL('http://linkedin.com/in/sejawal-panhwar-6ab81b299')} >
          <Image style={styles.iconImg} 
          source={require('../../assets/images/lk.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Sejawal110')}>
          <Image  style={styles.iconImg} source={require('../../assets/images/git.png')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/sejawalali.panhwar?mibextid=LQQJ4d')}>
          <Image style={styles.iconImg} source={require('../../assets/images/fb.png')}/>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    paddingBottom: 30,
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#4a90e2',
  
  
  },
  card: {
    width: windowWidth * 0.9,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  subheader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'justify',
  },
  founderInfo: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'justify',
  },
  mission: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'justify',
},

boldText: {
  fontWeight: 'bold',
  
},

linksContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 25
  
},

iconImg: {
  width: 25,
  height: 25,
  marginLeft: 15
},

borderLine : {
  borderWidth: 1,
  borderColor: '#666',
  width: '80%',
  position: 'relative',
  top: 8
  
},


});