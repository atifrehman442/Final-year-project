// import 'react-native-gesture-handler';

import React, { useEffect } from "react";
 
import { NavigationContainer , CommonActions } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashbord from './Dashbord';

import Tutorials from './Tutorials';

import Exercise from "./Exercise";

import Simulator from "./Simulator";

import Recording from "./Recording";

import { Image } from 'react-native'


function Home({ navigation }) {
  useEffect(() => {
    setTimeout(() =>{
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes:[{name : 'Dashbord'}]  
        }))
    }, 5000);
  },[] )
  return (
   
            <Image 
            animation="zoomIn"
            duration={1500}
            style={{width:'100%',height:'100%'}}
            source={require('../Assect/Images/1.jpeg') }>
            </Image>
  );
}


const Stack = createNativeStackNavigator();

function Splach() {
  return (
    <NavigationContainer>
      <Stack.Navigator >

        <Stack.Screen name="Home" component={Home} 
         options={{headerShown:false }} />

       <Stack.Screen name="Dashbord" component={Dashbord} 
         options={{headerShown:false }} />

       <Stack.Screen name="Tutorials" component={Tutorials}
         options={{headerShown:false}}/>   

       <Stack.Screen name="Exercise" component={Exercise}
         options={{headerShown:false}}/>   

       <Stack.Screen name="Simulator" component={Simulator}
         options={{headerShown:false}}/> 

       <Stack.Screen name="Recording" component={Recording}
         options={{headerShown:false}}/>     
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default Splach;