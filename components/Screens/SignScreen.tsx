import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import CheckBoxx from '../CheckBoxx';

export default function SignupScreen({navigation}: {navigation: any} ) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [IsAgreed, setIsAgreed] = useState(false);

  const handleSignup = () => {
    if (!name || !email || !password || !phone) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password != confirmPassword)  {
      Alert.alert('Passwords not matched')
      return;
    }
  
    Alert.alert('Success', 'Signup successful!');
    navigation.navigate('Courses')
    setName('');
    setEmail('');
    setEmail('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
    setIsAgreed(false)

  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      
      
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

       <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />



      <View style={styles.checkboxContainer}>
      <CheckBoxx value={IsAgreed} onValueChange={setIsAgreed} />
      <Text style={styles.checkboxText}> I agree to terms and conditions  </Text>
      
      </View>

     <View style={styles.btnContainer}>
     <TouchableOpacity onPress={handleSignup} style={[styles.button , {
        backgroundColor: IsAgreed ? '#0D92F4' : 'grey'
      }]} 
      disabled={!IsAgreed}
      >
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
},

checkboxContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 15,
},

checkboxText: {
    
  fontSize: 16,
  marginLeft: 3
},
btnContainer: {
  marginTop: 12
},

button: {
  backgroundColor: '#0D92F4',
  padding: 10,
  borderRadius: 3,
  alignItems: 'center',
  
},
buttonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
},


});