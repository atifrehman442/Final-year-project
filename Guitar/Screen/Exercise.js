
import * as React from 'react';
 
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VideoPlayer from 'react-native-video-player'

import { Text , View , TouchableOpacity , Button ,
         SafeAreaView , Image , ScrollView , StyleSheet} from 'react-native'

import Simulator from './Simulator';         


function E1({navigation}) {
  return (
    <View>
   <View style={{alignItems:'center'}}>
     <Text style={{color:'black',paddingTop:80,fontStyle:'italic',fontWeight:'bold'}}>A short Melody</Text>
     <Text style={{color:'black',paddingTop:20,paddingBottom:100,fontSize:15,fontStyle:'italic',padding:15}}>
       In this exercise we'll be playing part of the tune to "Ode to Joy" by Beethoven.</Text>
      </View>
     <View>
      <VideoPlayer
      video={require('../Video/EX1.mp4')}
      videoWidth={1600}
      videoHeight={900}
      autoplay ={true}
      pauseOnPress ={true}
      />
    </View>
    <View style={{alignItems:'center',marginTop:150}}>
    <Button
        title='Perform'
        onPress={() => navigation.navigate('Simulator')}
      />
   </View>
  </View>
  );
}

function E2({navigation}) {
  return (
    <View>
   <View style={{alignItems:'center'}}>
     <Text style={{color:'black',paddingTop:80,fontStyle:'italic',fontWeight:'bold'}}>Single note rhythmic pattern</Text>
     <Text style={{color:'black',paddingTop:20,paddingBottom:30,fontSize:15,fontStyle:'italic',padding:10}}>
       In this exercise we will perform simple rhythm on a single note, using the given picking suggestions.</Text>
      </View>
     <View>
      <VideoPlayer
      video={require('../Video/EX2.mp4')}
      videoHeight={1000}
      autoplay ={true}
      pauseOnPress ={true}
      />
    </View>
    <View style={{alignItems:'center',marginTop:150}}>
    <Button
        title='Perform'
        onPress={() => navigation.navigate('Simulator')}
      />
   </View>
  </View>
  );
}

function E3({navigation}) {
  return (
    <View>
   <View style={{alignItems:'center'}}>
     <Text style={{color:'black',paddingTop:80,fontStyle:'italic',fontWeight:'bold'}}>National Anthem Music</Text>
     <Text style={{color:'black',paddingTop:20,paddingBottom:100,fontSize:15,fontStyle:'italic'}}>
       In this exercise you'll be playing this simple national anthem music.</Text>
      </View>
     <View>
      <VideoPlayer
      video={require('../Video/EX3.mp4')}
      videoWidth={1600}
      videoHeight={900}
      autoplay ={true}
      pauseOnPress ={true}
      />
    </View>
    <View style={{alignItems:'center',marginTop:150}}>
    <Button
        title='Perform'
        onPress={() => navigation.navigate('Simulator')}
      />
   </View>
  </View>
  );
}

function E4({navigation}) {
  return (
    <View>
   <View style={{alignItems:'center'}}>
     <Text style={{color:'black',paddingTop:80,fontStyle:'italic',fontWeight:'bold'}}>Birthday Music</Text>
     <Text style={{color:'black',paddingTop:20,paddingBottom:100,fontSize:15,fontStyle:'italic'}}>
       In this exercise you'll be playing this simple birthday music.</Text>
      </View>
     <View>
      <VideoPlayer
      video={require('../Video/EX4.mp4')}
      videoWidth={1600}
      videoHeight={900}
      autoplay ={true}
      pauseOnPress ={true}
      />
    </View>
    <View style={{alignItems:'center',marginTop:150}}>
    <Button
        title='Perform'
        onPress={() => navigation.navigate('Simulator')}
      />
   </View>
  </View>
  );
}

function E5({navigation}) {
  return (
    <View>
   <View style={{alignItems:'center'}}>
     <Text style={{color:'black',paddingTop:80,fontStyle:'italic',fontWeight:'bold'}}>Pirates of the Caribbean Theme Music</Text>
     <Text style={{color:'black',paddingTop:20,paddingBottom:100,fontSize:15,fontStyle:'italic',padding:10}}>
       In this exercise you'll be playing this simple pirates of the caribbean theme music.</Text>
      </View>
     <View>
      <VideoPlayer
      video={require('../Video/EX5.mp4')}
      videoWidth={1600}
      videoHeight={900}
      autoplay ={true}
      pauseOnPress ={true}
      />
    </View>
    <View style={{alignItems:'center',marginTop:150}}>
    <Button
        title='Perform'
        onPress={() => navigation.navigate('Simulator')}
      />
   </View>
  </View>
  );
}


function Exercises({navigation}) {
  return (
    <SafeAreaView style={{flex:1 ,margin:'2%'}}>
    <View>

      <ScrollView>
        <View style={styles.Container}>
         <TouchableOpacity onPress={() => navigation.navigate('E1')}>
          <Image style={styles.image}  
            source={require('../Assect/Images/3.jpg') } >
          </Image>
          <Text style={styles.text1}>Exercise 1</Text>
          <Text style={styles.text2}></Text>
         </TouchableOpacity>
        </View>

        <View style={styles.Container}>
         <TouchableOpacity onPress={() => navigation.navigate('E2')}>
          <Image style={styles.image}  
            source={require('../Assect/Images/3.jpg') } >
          </Image>
          <Text style={styles.text1}>Exercise 2</Text>
          <Text style={styles.text2}></Text>
         </TouchableOpacity>
        </View>

        <View style={styles.Container}>
         <TouchableOpacity onPress={() => navigation.navigate('E3')}>
          <Image style={styles.image}  
            source={require('../Assect/Images/3.jpg') } >
          </Image>
          <Text style={styles.text1}>Exercise 3</Text>
          <Text style={styles.text2}></Text>
         </TouchableOpacity>
        </View>

        <View style={styles.Container}>
         <TouchableOpacity onPress={() => navigation.navigate('E4')}>
          <Image style={styles.image}  
            source={require('../Assect/Images/3.jpg') } >
          </Image>
          <Text style={styles.text1}>Exercise 4</Text>
          <Text style={styles.text2}></Text>
         </TouchableOpacity>
        </View>

        <View style={styles.Container}>
         <TouchableOpacity onPress={() => navigation.navigate('E5')}>
          <Image style={styles.image}  
            source={require('../Assect/Images/3.jpg') } >
          </Image>
          <Text style={styles.text1}>Exercise 5</Text>
          <Text style={styles.text2}></Text>
         </TouchableOpacity>
        </View>

        </ScrollView>

   </View>
   </SafeAreaView>

  );
}


const Stacks = createNativeStackNavigator();

function Exercise() {
  return (
    <NavigationContainer independent={true}>
      <Stacks.Navigator>

        <Stacks.Screen name="Exercise" component={Exercises} 
         options={{headerTitleAlign:'center' , headerTitleStyle:{
          fontWeight:'bold'
        }}} />

         <Stacks.Screen name="E1" component={E1} 
         options={{headerShown:false}} />  

         <Stacks.Screen name="E2" component={E2} 
         options={{headerShown:false}} />  

         <Stacks.Screen name="E3" component={E3} 
         options={{headerShown:false}} /> 

         <Stacks.Screen name="E4" component={E4} 
         options={{headerShown:false}} /> 
       
       <Stacks.Screen name="E5" component={E5} 
         options={{headerShown:false}} /> 

       <Stacks.Screen name="Simulator" component={Simulator} 
         options={{headerShown:false}} /> 

      </Stacks.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({

  Container: {
    flexDirection:'row',
    backgroundColor:'white',
    borderWidth:2,
    width:'100%',
    height:'14%',
    borderRadius:20,
    marginTop:40,
    padding:10

  },
  image: {
    width:100,
    height:85,
    borderRadius:20,
    marginBottom:28,
    marginLeft:5,
  },
  text1: {
    fontSize:30,
    marginLeft:'50%',
    marginTop:-100,
    fontWeight:'bold',
    color:'black'
  },
  text2: {
    fontSize:20,
    marginLeft:'50%',
    color:'black'
  },
})


export default Exercise;