import React, { useState, useEffect, startTransition } from 'react';

import { SafeAreaView, Text, View, StyleSheet, Alert, 
         TouchableOpacity, Image, FlatList, ImageBackground, 
         TouchableWithoutFeedback, Pressable } from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';



import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sound from 'react-native-sound';

var db = openDatabase({ name: 'G1_Database.db' });

import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,

} from 'react-native-popup-menu';


// Tunes

let a61_56_410 = new Sound(require('../Assect/Sound/61.wav'))
let a62_57_411 = new Sound(require('../Assect/Sound/62.wav'))
let a63_58_412 = new Sound(require('../Assect/Sound/63.wav'))
let a64_59 = new Sound(require('../Assect/Sound/64.wav'))
let a65_510 = new Sound(require('../Assect/Sound/65.wav'))
let a66_511 = new Sound(require('../Assect/Sound/66.wav'))
let a67_512 = new Sound(require('../Assect/Sound/67.wav'))
let a68 = new Sound(require('../Assect/Sound/68.wav'))
let a69 = new Sound(require('../Assect/Sound/69.wav'))
let a610 = new Sound(require('../Assect/Sound/610.wav'))
let a611 = new Sound(require('../Assect/Sound/611.wav'))
let a612 = new Sound(require('../Assect/Sound/612.wav'))
let b51_45_310 = new Sound(require('../Assect/Sound/51.wav'))
let b52_46_311 = new Sound(require('../Assect/Sound/52.wav'))
let b53_47_312 = new Sound(require('../Assect/Sound/53.wav'))
let b54_48 = new Sound(require('../Assect/Sound/54.wav'))
let b55_49 = new Sound(require('../Assect/Sound/55.wav'))
let c41_36_211 = new Sound(require('../Assect/Sound/41.wav'))
let c42_37_212 = new Sound(require('../Assect/Sound/42.wav'))
let c43_38 = new Sound(require('../Assect/Sound/43.wav'))
let c44_39 = new Sound(require('../Assect/Sound/44.wav'))
let d31_26 = new Sound(require('../Assect/Sound/31.wav'))
let d32_27 = new Sound(require('../Assect/Sound/32.wav'))
let d33_28 = new Sound(require('../Assect/Sound/33.wav'))
let d34_29 = new Sound(require('../Assect/Sound/34.wav'))
let d35_210 = new Sound(require('../Assect/Sound/35.wav'))
let e21_16 = new Sound(require('../Assect/Sound/21.wav'))
let e22_17 = new Sound(require('../Assect/Sound/22.wav'))
let e23_18 = new Sound(require('../Assect/Sound/23.wav'))
let e24_19 = new Sound(require('../Assect/Sound/24.wav'))
let e25_110 = new Sound(require('../Assect/Sound/25.wav'))
let f11 = new Sound(require('../Assect/Sound/11.wav'))
let f12 = new Sound(require('../Assect/Sound/12.wav'))
let f13 = new Sound(require('../Assect/Sound/13.wav'))
let f14 = new Sound(require('../Assect/Sound/14.wav'))
let f15 = new Sound(require('../Assect/Sound/15.wav'))
let f111 = new Sound(require('../Assect/Sound/111.wav'))
let f112 = new Sound(require('../Assect/Sound/112.wav'))


function Rec({ navigation }) {

  const img = <Image
    style={{ width: 10, height: 60 }}
    source={require('../Assect/Images/a1.png')}
  />


  const [items, setItems] = useState([]);
  const [empty, setEmpty] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM G_Table',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setItems(temp);

          if (results.rows.length >= 1) {
            setEmpty(false);
          } else {
            setEmpty(true)
          }

        }
      );

    });
  }, []);



  const [it, setIt] = useState([]);
  const [fet, setFit] = useState()

  const fetch = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT G_number FROM G_Table where id=?',
        [fet],
        (tx, results) => {
          //  amber = tem.G_chord.length
          var tem = [];
          for (let i = 0; i < results.rows.length; i++)
            tem.push(results.rows.item(i));
          setIt(tem);



          {
            tem[0].G_number.split(',').map((step, i) => {


              setTimeout(() => {


                if (step == 61 || step == 56 || step == 410) {
                  a61_56_410.play()
                }
                if (step == 62 || step == 57 || step == 411) {
                  a62_57_411.play()
                }
                if (step == 63 || step == 58 || step == 412) {
                  a63_58_412.play()
                }
                if (step == 64 || step == 59) {
                  a64_59.play()
                }
                if (step == 65 || step == 510) {
                  a65_510.play()
                }
                if (step == 66 || step == 511) {
                  a66_511.play()
                }
                if (step == 67 || step == 512) {
                  a67_512.play()
                }
                if (step == 68) {
                  a68.play()
                }
                if (step == 69) {
                  a69.play()
                }
                if (step == 610) {
                  a610.play()
                }
                if (step == 611) {
                  a611.play()
                }
                if (step == 612) {
                  a612.play()
                }
                if (step == 51 || step == 45 || step == 310) {
                  b51_45_310.play()
                }
                if (step == 52 || step == 46 || step == 311) {
                  b52_46_311.play()
                }
                if (step == 53 || step == 47 || step == 312) {
                  b53_47_312.play()
                }
                if (step == 54 || step == 48) {
                  b54_48.play()
                }
                if (step == 55 || step == 49) {
                  b55_49.play()
                }
                if (step == 41 || step == 36 || step == 211) {
                  c41_36_211.play()
                }
                if (step == 42 || step == 37 || step == 212) {
                  c42_37_212.play()
                }
                if (step == 43 || step == 38) {
                  c43_38.play()
                }
                if (step == 44 || step == 39) {
                  c44_39.play()
                }
                if (step == 31 || step == 26) {
                  d31_26.play()
                }
                if (step == 32 || step == 27) {
                  d32_27.play()
                }
                if (step == 33 || step == 28) {
                  d33_28.play()
                }
                if (step == 34 || step == 29) {
                  d34_29.play()
                }
                if (step == 35 || step == 210) {
                  d35_210.play()
                }
                if (step == 21 || step == 16) {
                  e21_16.play()
                }
                if (step == 22 || step == 17) {
                  e22_17.play()
                }
                if (step == 23 || step == 18) {
                  e23_18.play()
                }
                if (step == 24 || step == 19) {
                  e24_19.play()
                }
                if (step == 25 || step == 110) {
                  e25_110.play()
                }
                if (step == 11) {
                  f11.play()
                }
                if (step == 12) {
                  f12.play()
                }
                if (step == 13) {
                  f13.play()
                }
                if (step == 14) {
                  f14.play()
                }
                if (step == 15) {
                  f15.play()
                }
                if (step == 111) {
                  f111.play()
                }
                if (step == 112) {
                  f112.play()
                }

              }, i * 1000)

            }
            )
          }


        }
      );

    });
  }



  const emptyMSG = (status) => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>

        <Text style={{ fontSize: 25, textAlign: 'center' }}>
          No Record Inserted Database is Empty...
        </Text>

      </View>
    );
  }


  const [first, setfirst] = useState('')

  const deleteRecord = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM G_Table where id=?',
        [first],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            db.transaction((tx) => {
              tx.executeSql(
                'SELECT * FROM G_Table',
                [],
                (tx, results) => {
                  var temp = [];
                  for (let i = 0; i < results.rows.length; ++i)
                    temp.push(results.rows.item(i));
                  setItems(temp);
        
                  if (results.rows.length >= 1) {
                    setEmpty(false);
                  } else {
                    setEmpty(true)
                  }
        
                }
              );
        
            });
          }
        }
      );
    });

  }

  const Dhowdata = (id, name, chord, time) => {

    navigation.navigate('Detail', {
      id: id,
      G_name: name,
      G_chord: chord,
      D_time: time
    });
  }

  const music = (id) => {

    navigation.navigate('Music', {
      id: id,
    });
  }

  return (
    <MenuProvider >

      <SafeAreaView style={{ flex: 1 }}>
        <View style={{}}>

          {empty ? emptyMSG(empty) :

            <FlatList
              data={items}

              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>

                <View key={item.id} style={{ padding: 5, }}>

                  <TouchableOpacity style={{ borderRadius: 20, backgroundColor: 'white', borderWidth: 2, }}
                    // onPress={fetch} onPressIn={() => { setFit(item.id) }}
                    onPressIn={() => { music(item.id) }}
                  >
                    <View style={{ borderRadius: 16, backgroundColor: 'white', padding: 15, width: '90%', }}>
                      <Image style={styles.image}
                        source={require('../Assect/Images/4.jpg')} >
                      </Image>
                      <Text style={{ color: 'black', fontSize: 16, marginLeft: '30%', marginTop: '-20%' }}> {item.G_name} </Text>
                      <Text style={{ color: 'black', fontSize: 22, marginLeft: '30%', }} numberOfLines={1}> {item.G_chord} </Text>
                      {/* <Text style={{ color: 'black', fontSize: 22, marginLeft: '30%', }}> {item.G_number} </Text> */}
                    </View>
                  </TouchableOpacity>

                  <View style={{ height: 100, marginTop: -100, }}>
                    <Menu style={{ marginLeft: '90%', marginTop: '7%', width: '10%' }}>
                      <MenuTrigger onPress={() => setfirst(item.id)}>{img}</MenuTrigger>
                      <MenuOptions >
                        <MenuOption>
                          <Text style={{ color: 'black', fontSize: 18 }} onPress={() => { deleteRecord(); navigation.navigate('Recording') }}>Delete</Text>
                        </MenuOption>
                        <MenuOption>
                          <Text style={{ color: 'black', fontSize: 18 }} onPress={() => Dhowdata(item.id, item.G_name, item.G_chord, item.D_time)}>Detail</Text>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>

                  </View>

                </View>
              }
            />
          }
        </View>
      </SafeAreaView>

    </MenuProvider>
  );
}

function Detail({ route, navigation }) {

  const [S_Id, setID] = useState('');
  const [S_Name, setName] = useState('');
  const [S_Phone, setPhone] = useState();
  const [S_Address, setAddress] = useState('');

  useEffect(() => {

    setID(route.params.id);
    setName(route.params.G_name);
    setPhone(route.params.G_chord);
    setAddress(route.params.D_time);

  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>

        <Text style={styles.Dvalue}>Id No : {S_Id}</Text>
        <Text style={styles.Dvalue}>Tune Name : {S_Name}</Text>
        <Text style={styles.Dvalue}>Chord Name : {S_Phone}</Text>
        <Text style={styles.Dvalue}>Date&Time : {S_Address}</Text>

      </View>

    </SafeAreaView>
  );
};


function Music({ route, navigation }) {

  const [S_Id, setID] = useState('');
  const [it, setIt] = useState([]);
  const [values, setValues] = useState()
  useEffect(() => {

    setID(route.params.id);


    db.transaction((tx) => {
      tx.executeSql(
        'SELECT G_number FROM G_Table where id=?',
        [route.params.id],
        (tx, results) => {
          //  amber = tem.G_chord.length
          var tem = [];
          for (let i = 0; i < results.rows.length; i++)
            tem.push(results.rows.item(i));
          setIt(tem);

          {
            tem[0].G_number.split(',').map((step, i) => {


              setTimeout(() => {


                if (step == 61 || step == 56 || step == 410) {
                  setValues(step)
                  a61_56_410.play()
                }
                if (step == 62 || step == 57 || step == 411) {
                  setValues(step)
                  a62_57_411.play()
                }
                if (step == 63 || step == 58 || step == 412) {
                  setValues(step)
                  a63_58_412.play()
                }
                if (step == 64 || step == 59) {
                  setValues(step)
                  a64_59.play()
                }
                if (step == 65 || step == 510) {
                  setValues(step)
                  a65_510.play()
                }
                if (step == 66 || step == 511) {
                  setValues(step)
                  a66_511.play()
                }
                if (step == 67 || step == 512) {
                  setValues(step)
                  a67_512.play()
                }
                if (step == 68) {
                  setValues(step)
                  a68.play()
                }
                if (step == 69) {
                  setValues(step)
                  a69.play()
                }
                if (step == 610) {
                  setValues(step)
                  a610.play()
                }
                if (step == 611) {
                  setValues(step)
                  a611.play()
                }
                if (step == 612) {
                  setValues(step)
                  a612.play()
                }
                if (step == 51 || step == 45 || step == 310) {
                  setValues(step)
                  b51_45_310.play()
                }
                if (step == 52 || step == 46 || step == 311) {
                  setValues(step)
                  b52_46_311.play()
                }
                if (step == 53 || step == 47 || step == 312) {
                  setValues(step)
                  b53_47_312.play()
                }
                if (step == 54 || step == 48) {
                  setValues(step)
                  b54_48.play()
                }
                if (step == 55 || step == 49) {
                  setValues(step)
                  b55_49.play()
                }
                if (step == 41 || step == 36 || step == 211) {
                  setValues(step)
                  c41_36_211.play()
                }
                if (step == 42 || step == 37 || step == 212) {
                  setValues(step)
                  c42_37_212.play()
                }
                if (step == 43 || step == 38) {
                  setValues(step)
                  c43_38.play()
                }
                if (step == 44 || step == 39) {
                  setValues(step)
                  c44_39.play()
                }
                if (step == 31 || step == 26) {
                  setValues(step)
                  d31_26.play()
                }
                if (step == 32 || step == 27) {
                  setValues(step)
                  d32_27.play()
                }
                if (step == 33 || step == 28) {
                  setValues(step)
                  d33_28.play()
                }
                if (step == 34 || step == 29) {
                  setValues(step)
                  d34_29.play()
                }
                if (step == 35 || step == 210) {
                  setValues(step)
                  d35_210.play()
                }
                if (step == 21 || step == 16) {
                  setValues(step)
                  e21_16.play()
                }
                if (step == 22 || step == 17) {
                  setValues(step)
                  e22_17.play()
                }
                if (step == 23 || step == 18) {
                  setValues(step)
                  e23_18.play()
                }
                if (step == 24 || step == 19) {
                  setValues(step)
                  e24_19.play()
                }
                if (step == 25 || step == 110) {
                  setValues(step)
                  e25_110.play()
                }
                if (step == 11) {
                  setValues(step)
                  f11.play()
                }
                if (step == 12) {
                  setValues(step)
                  f12.play()
                }
                if (step == 13) {
                  setValues(step)
                  f13.play()
                }
                if (step == 14) {
                  setValues(step)
                  f14.play()
                }
                if (step == 15) {
                  setValues(step)
                  f15.play()
                }
                if (step == 111) {
                  setValues(step)
                  f111.play()
                }
                if (step == 112) {
                  setValues(step)
                  f112.play()
                }

              }, i * 1000)

            }
            )
          }


          // console.log(data)
          // console.log(count)
        }
      );

    });

  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../Assect/Images/guitar2.png')} style={[styles.bgimage]} >

          <Pressable style={styles.rec}>
            <View style={{width:'40%',height:'40%',backgroundColor:'red'}}>
            </View>
          </Pressable>


        {/* String 6 */}

        <View style={[styles.string]}> 

          <View style={[styles.txt1]}>
            {values == 61 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}></Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 62 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F# </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 63 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> G </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 64 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> G# </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 65 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 66 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A# </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 67 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> B </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 68 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 69 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 610 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 611 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt12]}>
            {values == 612 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> E </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }

          </View>

        </View>

        {/* String 5 */}

        <View style={[styles.string]}>

          <View style={[styles.txt1]}>
            {values == 51 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A# </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 52 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> B </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 53 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 54 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 55 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 56 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 57 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> E1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 58 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 59 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 510 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> G1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 511 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> G#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt12]}>
            {values == 512 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>
        </View>


        {/* String 4 */}


        <View style={[styles.string]}>

          <View style={[styles.txt1]}>
            {values == 41 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}></Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 42 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> E1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 43 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 44 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 45 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> G1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 46 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> G#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 47 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 48 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 49 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> B1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 410 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 411 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt12]}>
            {values == 412 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }

          </View>

        </View>

        {/* String 3 */}


        <View style={[styles.string]}>

          <View style={[styles.txt1]}>
            {values == 31 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> g#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}></Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 32 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 33 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A#1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 34 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> B1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 35 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 36 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 37 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 38 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 39 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> E2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 310 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 311 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt12]}>
            {values == 312 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> G1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }

          </View>

        </View>


            {/* String 2 */}

        <View style={[styles.string]}>

          <View style={[styles.txt1]}>
            {values == 21 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}></Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 22 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 23 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 24 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 25 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> E2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 26 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 27 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 28 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> G2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 29 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> G#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 210 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 211 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt12]}>
            {values == 212 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> B1 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }

          </View>

        </View>


                {/* String 1 */}


        <View style={[styles.string]}>

          <View style={[styles.txt1]}>
            {values == 11 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}></Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 12 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> F#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 13 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> G2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 14 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> G#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 15 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 16 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> A#2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 17 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> B2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 18 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C3 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 19 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> C#3 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 110 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D3 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt]}>
            {values == 111 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> D#3 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }
          </View>

          <View style={[styles.txt12]}>
            {values == 112 ?
              <Text style={{ color: 'white', fontSize: 18, backgroundColor:'blue' }}> E2 </Text>
              :
              <Text style={{ color: 'white', fontSize: 22 }}> </Text>
            }

          </View>

        </View>



      </ImageBackground>

    </View>
  );
};

const Stacks = createNativeStackNavigator();

export default function Recording() {
  return (
    <NavigationContainer independent={true}>
      <Stacks.Navigator>

        <Stacks.Screen name="Recording" component={Rec}
          options={{ headerTitleAlign: 'center', headerTitleStyle: { fontWeight: 'bold' } }}
        />
        <Stacks.Screen name="Detail" component={Detail}
          options={{ headerTitleAlign: 'center', headerTitleStyle: { fontWeight: 'bold' } }}
        />
        <Stacks.Screen name="Music" component={Music}
          options={{ headerShown: false }}
        />

      </Stacks.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  Dvalue: {
    fontSize: 30
  },
  image: {
    width: "30%",
    height: 90,
    borderRadius: 20,
    marginTop: -10
  },
  bgimage: {
    width: '100%',
    height: "100%",
    flexDirection: "row",

  },
  string: {
    flexDirection: 'column',
    // backgroundColor:"black",
    width: "9%",
    marginRight: 15,

  },
  txt1: {
    height: 45,
    width: 45,
    // backgroundColor:'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
  },
  txt: {
    height: 40,
    width: 45,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,

  },
  txt12: {
    height: 35,
    width: 45,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,


  },
  rec: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    marginRight: 10,
    marginTop: 720,
    backgroundColor: '#340006',
    borderRadius: 50
  }

});