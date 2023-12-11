import React, { useEffect } from "react";

import { StyleSheet, Text, View, Image , 
         BackHandler , Alert , ScrollView,
         TouchableOpacity , SafeAreaView} from 'react-native';


export default function Dashbord ({navigation})
{

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("", "Are you sure you exit", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel"
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() }
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);


     return(
   <SafeAreaView style={styles.container}>
      <View >
       <View style={styles.statusBar} >
         <Text style={{fontSize: 20, textAlign: 'center', fontStyle:"italic", fontWeight:'bold',color:'black' }}>Dashbord</Text>
          </View>
        <ScrollView>
        
        <TouchableOpacity onPress={() => navigation.navigate('Tutorials')} >
          <Image style={styles.image}  
            source={require('../Assect/Images/2.jpg') } >
          </Image>
          <View style={styles.MainContainer}>
           <Text style={styles.text}>Tutorials</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Exercise')} >
          <Image style={styles.image}
            source={require('../Assect/Images/3.jpg') } />
          <View style={styles.MainContainer}>
           <Text style={styles.text}>Exercise</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Simulator')} >
          <Image style={styles.image}
            source={require('../Assect/Images/5.jpg') } /> 
          <View style={styles.MainContainer}>
           <Text style={styles.text}>Simulator</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Recording')} >
          <Image style={styles.image}
            source={require('../Assect/Images/4.jpg') } />
          <View style={styles.MainContainer}>
           <Text style={styles.text}>Recording</Text>
          </View>
          <View style={{height:'100%' , width:'100%'}} >
         <Text style={{fontSize: 20, textAlign: 'center', fontStyle:"italic", fontWeight:'bold',color:'black' }}>Dashbord</Text>
          </View>
          </TouchableOpacity>
          </ScrollView>  
       </View> 
       
       </SafeAreaView>
   );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    MainContainer: {
      flex: 1,
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
   
    image: {
      width:'90%',
      height:250,
      borderRadius:40,
      marginLeft:'5%',
      marginBottom:'8%',
   
    },
    statusBar: {
      
      backgroundColor:'white',
      height:'8%',
      width:'100%',
      justifyContent:'center',
      alignItems:'center',
    },
    text: {
      position:'absolute',
      paddingLeft:'40%',
      paddingBottom:'50%',
      fontSize:30,
      fontWeight:'bold',
      color:'white'
    }
   
  });


  