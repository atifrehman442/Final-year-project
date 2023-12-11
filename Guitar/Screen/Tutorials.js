
import * as React from 'react';
 
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VideoPlayer from 'react-native-video-player'

import { Text , View , TouchableOpacity ,
         SafeAreaView , Image , ScrollView , StyleSheet} from 'react-native'


function V1() {
  return (
   <View style={styles.video}>
     <View>
      <VideoPlayer
      video={require('../Video/V1.mp4')}
      videoWidth={1600}
      videoHeight={900}
      autoplay ={true}
      pauseOnPress ={true}
 
      />
    </View>
  </View>
  );
}
function V2() {
  return (
   <View style={styles.video}>
     <View>
      <VideoPlayer
      video={require('../Video/V2.mp4')}
      videoWidth={1600}
      videoHeight={900}
      autoplay ={true}
      pauseOnPress ={true}
 
      />
    </View>
  </View>
  );
}

function V3() {
  return (
   <View style={styles.video}>
     <View>
      <VideoPlayer
      video={require('../Video/V3.mp4')}
      videoWidth={1600}
      videoHeight={900}
      autoplay ={true}
      pauseOnPress ={true}
 
      />
    </View>
  </View>
  );
}

function V4() {
  return (
   <View style={styles.video}>
     <View>
      <VideoPlayer
      video={require('../Video/V4.mp4')}
      videoWidth={1600}
      videoHeight={900}
      autoplay ={true}
      pauseOnPress ={true}
 
      />
    </View>
  </View>
  );
}

function V5() {
  return (
   <View style={styles.video}>
     <View>
      <VideoPlayer
      video={require('../Video/V5.mp4')}
      videoWidth={1600}
      videoHeight={900}
      autoplay ={true}
      pauseOnPress ={true}
 
      />
    </View>
  </View>
  );
}

function Tutorial({navigation}) {
  return (
    <SafeAreaView style={{flex:1 ,margin:'2%'}}>
    <View>

      <ScrollView>
        <View style={styles.Container}>
         <TouchableOpacity onPress={() => navigation.navigate('Introduction')}>
          <Image style={styles.image}  
            source={require('../Assect/Images/2.jpg') } >
          </Image>
          <Text style={styles.text1}>Tutorial 1</Text>
          <Text style={styles.text2}>Introduction</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.Container}>
         <TouchableOpacity onPress={() => navigation.navigate('Basic of Guitar')}>
          <Image style={styles.image}  
            source={require('../Assect/Images/2.jpg') } >
          </Image>
          <Text style={styles.text1}>Tutorial 2</Text>
          <Text style={styles.text2}>Basics of guitar</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.Container}>
         <TouchableOpacity onPress={() => navigation.navigate('Guitar Chords')}>
          <Image style={styles.image}  
            source={require('../Assect/Images/2.jpg') } >
          </Image>
          <Text style={styles.text1}>Tutorial 3</Text>
          <Text style={styles.text2}>Basics of chord</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.Container}>
         <TouchableOpacity onPress={() => navigation.navigate('Guitar Finger Exersice')}>
          <Image style={styles.image}  
            source={require('../Assect/Images/2.jpg') } >
          </Image>
          <Text style={styles.text1}>Tutorial 4</Text>
          <Text style={styles.text2}>Basics Finger Exer</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.Container}>
         <TouchableOpacity onPress={() => navigation.navigate('Guitar Riffs')}>
          <Image style={styles.image}  
            source={require('../Assect/Images/2.jpg') } >
          </Image>
          <Text style={styles.text1}>Tutorial 5</Text>
          <Text style={styles.text2}>Basic Guitar Riff</Text>
         </TouchableOpacity>
        </View>
        
        </ScrollView>

   </View>
   </SafeAreaView>

  );
}


const Stacks = createNativeStackNavigator();

function Tutorials() {
  return (
    <NavigationContainer independent={true}>
      <Stacks.Navigator>

        <Stacks.Screen name="Tutorial" component={Tutorial} 
         options={{headerTitleAlign:'center' , headerTitleStyle:{
          fontWeight:'bold'
        }}} />

         <Stacks.Screen name="Introduction" component={V1} 
         options={{headerShown:false}} />  

         <Stacks.Screen name="Basic of Guitar" component={V2} 
         options={{headerShown:false}} />   
       
       <Stacks.Screen name="Guitar Chords" component={V3} 
         options={{headerShown:false}} /> 

       <Stacks.Screen name="Guitar Finger Exersice" component={V4} 
         options={{headerShown:false}} /> 

       <Stacks.Screen name="Guitar Riffs" component={V5} 
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
    marginBottom:25,
    marginTop:-3
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
  video: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'white',

  },
})


export default Tutorials;