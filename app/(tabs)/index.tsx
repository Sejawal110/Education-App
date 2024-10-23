import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@/components/Screens/HomeScreen';
import CourseScreen from '@/components/Screens/CourseScreen';
import ContactScreen from '@/components/Screens/ContactScreen';
import StudentsScreen from '@/components/Screens/StudentsScreen';
import AboutScreen from '@/components/Screens/AboutScreen';
import SignupScreen from '@/components/Screens/SignScreen';
import DetailsScreen from '@/components/Screens/DetailsScreen';
import JoinScreen from '@/components/Screens/JoinScreen';



const Drawer = createDrawerNavigator();

  function Index () {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}
         options={{ headerTitleAlign: 'center', headerTitleStyle: {fontSize: 23}, }}
          />
        <Drawer.Screen name="About Us" component={AboutScreen} 
        options={{ headerTitleAlign: 'center', headerTitleStyle: {fontSize: 23}, }}
        />
        <Drawer.Screen name="Courses" component={CourseScreen} 
        options={{ headerTitleAlign: 'center', headerTitleStyle: {fontSize: 23}, }}
        />
        <Drawer.Screen name="Enrolled" component={StudentsScreen} 
        options={{ headerTitleAlign: 'center', headerTitleStyle: {fontSize: 23}, headerTitle: 'Students' }}
        />
        <Drawer.Screen name="Contact Us" component={ContactScreen} 
        options={{ headerTitleAlign: 'center', headerTitleStyle: {fontSize: 23}, }}
        />
         <Drawer.Screen name='Sign Up' component={SignupScreen} 
         options={{ headerTitleAlign: 'center', headerTitleStyle: {fontSize: 23}, }}
         />

         <Drawer.Screen name='Details' component={DetailsScreen} 
         options={{ headerTitleAlign: 'center', headerTitleStyle: {fontSize: 23}, }}
         />

<Drawer.Screen name='Join Now' component={JoinScreen} 
         options={{ headerTitleAlign: 'center', headerTitleStyle: {fontSize: 23}, }}
         />
      
        
        
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



export default Index;


