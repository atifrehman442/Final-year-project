import React, { useState, useEffect } from 'react';

import { Text, Pressable, View, StyleSheet, Alert, TouchableWithoutFeedback, ImageBackground, } from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sound from 'react-native-sound';

// import Recording from './Recording';

import Dialog from "react-native-dialog";

var db = openDatabase({ name: 'G1_Database.db' });

let G_chord = [];
let G_number = [];

function HomeScreen({ navigation }) {


  const [G_name, setName] = useState();
  const [D_time, setCurrentDate] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);


  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='G_Table'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS G_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS G_Table(id INTEGER PRIMARY KEY AUTOINCREMENT, G_name VARCHAR(30), G_chord VARCHAR(255), G_number VARCHAR(255), D_time VARCHAR(255))',
              []
            );
          }
        }
      );
    })

  }, []);



  const insertData = () => {


    if (G_name == '' || G_chord == '' || G_number == '' || D_time == '') {
      Alert.alert('Please Enter All the Values');
    } else {

      db.transaction(function (tx) {

        tx.executeSql(
          'INSERT INTO G_Table (G_name, G_chord, G_number, D_time) VALUES (?,?,?,?)',
          [G_name, G_chord, G_number, D_time],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            console.log(G_name, G_chord, G_number, D_time)
            if (results.rowsAffected > 0) {

              Alert.alert('Recording add successfully');
              G_chord = []
              G_number = []
              //  navigation.navigate('Recording')

            } else Alert.alert('Failed....');
          }
        );
      });

    }
  }




  const showDialog = () => {
    setVisible(true);
  }

  const handleCancel = () => {
    G_chord = []
    G_number = []
    setVisible(false);
  }

  const handle = () => {
    setName('')

    showDialog()

  }


  // String 6

  const [string6, setString6] = useState(12);
  let A
  let a
  let aa

  if (string6 == 1) {
    A = new Sound(require('../Assect/Sound/61.wav'))
    a = 'F'
    aa = 61
  }
  if (string6 == 2) {
    A = new Sound(require('../Assect/Sound/62.wav'))
    a = 'F#'
    aa = 62
  }
  if (string6 == 3) {
    A = new Sound(require('../Assect/Sound/63.wav'))
    a = 'G'
    aa = 63
  }
  if (string6 == 4) {
    A = new Sound(require('../Assect/Sound/64.wav'))
    a = 'G#'
    aa = 64
  }
  if (string6 == 5) {
    A = new Sound(require('../Assect/Sound/65.wav'))
    a = 'A'
    aa = 65
  }
  if (string6 == 6) {
    A = new Sound(require('../Assect/Sound/66.wav'))
    a = 'A#'
    aa = 66
  }
  if (string6 == 7) {
    A = new Sound(require('../Assect/Sound/67.wav'))
    a = 'B'
    aa = 67
  }
  if (string6 == 8) {
    A = new Sound(require('../Assect/Sound/68.wav'))
    a = 'C1'
    aa = 68
  }
  if (string6 == 9) {
    A = new Sound(require('../Assect/Sound/69.wav'))
    a = 'C#1'
    aa = 69
  }
  if (string6 == 10) {
    A = new Sound(require('../Assect/Sound/610.wav'))
    a = 'D1'
    aa = 610
  }
  if (string6 == 11) {
    A = new Sound(require('../Assect/Sound/611.wav'))
    a = 'D#1'
    aa = 611
  }
  if (string6 == 12) {
    A = new Sound(require('../Assect/Sound/612.wav'))
    a = 'E'
    aa = 612
  }

  // String 5

  const [string5, setString5] = useState(12);
  let B
  let b
  let bb

  if (string5 == 1) {
    B = new Sound(require('../Assect/Sound/51.wav'))
    b = 'A#'
    bb = 51
  }
  if (string5 == 2) {
    B = new Sound(require('../Assect/Sound/52.wav'))
    b = 'B'
    bb = 52
  }
  if (string5 == 3) {
    B = new Sound(require('../Assect/Sound/53.wav'))
    b = 'C1'
    bb = 53
  }
  if (string5 == 4) {
    B = new Sound(require('../Assect/Sound/54.wav'))
    b = 'C#1'
    bb = 54
  }
  if (string5 == 5) {
    B = new Sound(require('../Assect/Sound/55.wav'))
    b = 'D1'
    bb = 55
  }
  if (string5 == 6) {
    B = new Sound(require('../Assect/Sound/56.wav'))
    b = 'D#1'
    bb = 56
  }
  if (string5 == 7) {
    B = new Sound(require('../Assect/Sound/57.wav'))
    b = 'E1'
    bb = 57
  }
  if (string5 == 8) {
    B = new Sound(require('../Assect/Sound/58.wav'))
    b = 'F1'
    bb = 58
  }
  if (string5 == 9) {
    B = new Sound(require('../Assect/Sound/59.wav'))
    b = 'F#1'
    bb = 59
  }
  if (string5 == 10) {
    B = new Sound(require('../Assect/Sound/510.wav'))
    b = 'G1'
    bb = 510
  }
  if (string5 == 11) {
    B = new Sound(require('../Assect/Sound/511.wav'))
    b = 'G#1'
    bb = 511
  }
  if (string5 == 12) {
    B = new Sound(require('../Assect/Sound/512.wav'))
    b = 'A'
    bb = 512
  }

  // String 4

  const [string4, setString4] = useState(12);
  let C
  let c
  let cc

  if (string4 == 1) {
    C = new Sound(require('../Assect/Sound/41.wav'))
    c = 'D#1'
    cc = 41
  }
  if (string4 == 2) {
    C = new Sound(require('../Assect/Sound/42.wav'))
    c = 'E1'
    cc = 42
  }
  if (string4 == 3) {
    C = new Sound(require('../Assect/Sound/43.wav'))
    c = 'F1'
    cc = 43
  }
  if (string4 == 4) {
    C = new Sound(require('../Assect/Sound/44.wav'))
    c = 'F#1'
    cc = 44
  }
  if (string4 == 5) {
    C = new Sound(require('../Assect/Sound/45.wav'))
    c = 'G1'
    cc = 45
  }
  if (string4 == 6) {
    C = new Sound(require('../Assect/Sound/46.wav'))
    c = 'G#1'
    cc = 46
  }
  if (string4 == 7) {
    C = new Sound(require('../Assect/Sound/47.wav'))
    c = 'A1'
    cc = 47
  }
  if (string4 == 8) {
    C = new Sound(require('../Assect/Sound/48.wav'))
    c = 'A#1'
    cc = 48
  }
  if (string4 == 9) {
    C = new Sound(require('../Assect/Sound/49.wav'))
    c = 'B1'
    cc = 49
  }
  if (string4 == 10) {
    C = new Sound(require('../Assect/Sound/410.wav'))
    c = 'C2'
    cc = 410
  }
  if (string4 == 11) {
    C = new Sound(require('../Assect/Sound/411.wav'))
    c = 'C#2'
    cc = 411
  }
  if (string4 == 12) {
    C = new Sound(require('../Assect/Sound/412.wav'))
    c = 'D1'
    cc = 412
  }

  // String 3

  const [string3, setString3] = useState(12);
  let D
  let d
  let dd

  if (string3 == 1) {
    D = new Sound(require('../Assect/Sound/31.wav'))
    d = 'G#1'
    dd = 31
  }
  if (string3 == 2) {
    D = new Sound(require('../Assect/Sound/32.wav'))
    d = 'A1'
    dd = 32
  }
  if (string3 == 3) {
    D = new Sound(require('../Assect/Sound/33.wav'))
    d = 'A#1'
    dd = 33
  }
  if (string3 == 4) {
    D = new Sound(require('../Assect/Sound/34.wav'))
    d = 'B1'
    dd = 34
  }
  if (string3 == 5) {
    D = new Sound(require('../Assect/Sound/35.wav'))
    d = 'C2'
    dd = 35
  }
  if (string3 == 6) {
    D = new Sound(require('../Assect/Sound/36.wav'))
    d = 'C#2'
    dd = 36
  }
  if (string3 == 7) {
    D = new Sound(require('../Assect/Sound/37.wav'))
    d = 'D2'
    dd = 37
  }
  if (string3 == 8) {
    D = new Sound(require('../Assect/Sound/38.wav'))
    d = 'D#2'
    dd = 38
  }
  if (string3 == 9) {
    D = new Sound(require('../Assect/Sound/39.wav'))
    d = 'E2'
    dd = 39
  }
  if (string3 == 10) {
    D = new Sound(require('../Assect/Sound/310.wav'))
    d = 'F2'
    dd = 310
  }
  if (string3 == 11) {
    D = new Sound(require('../Assect/Sound/311.wav'))
    d = 'F#2'
    dd = 311
  }
  if (string3 == 12) {
    D = new Sound(require('../Assect/Sound/312.wav'))
    d = 'G1'
    dd = 312
  }

  // String 2

  const [string2, setString2] = useState(12);
  let E
  let e
  let ee

  if (string2 == 1) {
    E = new Sound(require('../Assect/Sound/21.wav'))
    e = 'C2'
    ee = 21
  }
  if (string2 == 2) {
    E = new Sound(require('../Assect/Sound/22.wav'))
    e = 'C#2'
    ee = 22
  }
  if (string2 == 3) {
    E = new Sound(require('../Assect/Sound/23.wav'))
    e = 'D2'
    ee = 23
  }
  if (string2 == 4) {
    E = new Sound(require('../Assect/Sound/24.wav'))
    e = 'D#2'
    ee = 24
  }
  if (string2 == 5) {
    E = new Sound(require('../Assect/Sound/25.wav'))
    e = 'E2'
    ee = 25
  }
  if (string2 == 6) {
    E = new Sound(require('../Assect/Sound/26.wav'))
    e = 'F2'
    ee = 26
  }
  if (string2 == 7) {
    E = new Sound(require('../Assect/Sound/27.wav'))
    e = 'F#2'
    ee = 27
  }
  if (string2 == 8) {
    E = new Sound(require('../Assect/Sound/28.wav'))
    e = 'G2'
    ee = 28
  }
  if (string2 == 9) {
    E = new Sound(require('../Assect/Sound/29.wav'))
    e = 'G#2'
    ee = 29
  }
  if (string2 == 10) {
    E = new Sound(require('../Assect/Sound/210.wav'))
    e = 'A2'
    ee = 210
  }
  if (string2 == 11) {
    E = new Sound(require('../Assect/Sound/211.wav'))
    e = 'A#2'
    ee = 211
  }
  if (string2 == 12) {
    E = new Sound(require('../Assect/Sound/212.wav'))
    e = 'B1'
    ee = 212
  }

  // String 1

  const [string1, setString1] = useState(12);
  let F
  let f
  let ff

  if (string1 == 1) {
    F = new Sound(require('../Assect/Sound/11.wav'))
    f = 'F2'
    ff = 11
  }
  if (string1 == 2) {
    F = new Sound(require('../Assect/Sound/12.wav'))
    f = 'F#2'
    ff = 12
  }
  if (string1 == 3) {
    F = new Sound(require('../Assect/Sound/13.wav'))
    f = 'G2'
    ff = 13
  }
  if (string1 == 4) {
    F = new Sound(require('../Assect/Sound/14.wav'))
    f = 'G#2'
    ff = 14
  }
  if (string1 == 5) {
    F = new Sound(require('../Assect/Sound/15.wav'))
    f = 'A2'
    ff = 15
  }
  if (string1 == 6) {
    F = new Sound(require('../Assect/Sound/16.wav'))
    f = 'A#2'
    ff = 16
  }
  if (string1 == 7) {
    F = new Sound(require('../Assect/Sound/17.wav'))
    f = 'B2'
    ff = 17
  }
  if (string1 == 8) {
    F = new Sound(require('../Assect/Sound/18.wav'))
    f = 'C3'
    ff = 18
  }
  if (string1 == 9) {
    F = new Sound(require('../Assect/Sound/19.wav'))
    f = 'C#3'
    ff = 19
  }
  if (string1 == 10) {
    F = new Sound(require('../Assect/Sound/110.wav'))
    f = 'D3'
    ff = 110
  }
  if (string1 == 11) {
    F = new Sound(require('../Assect/Sound/111.wav'))
    f = 'D#3'
    ff = 111
  }
  if (string1 == 12) {
    F = new Sound(require('../Assect/Sound/112.wav'))
    f = 'E2'
    ff = 112
  }

  const [first, setFirst] = useState('');

  const addArray = () => {

    if(first == 6){
      G_chord.push(a);
      G_number.push(aa);
      }
      if(first == 5){
        G_chord.push(b);
        G_number.push(bb);
        }
        if(first == 4){
          G_chord.push(c);
          G_number.push(cc);
          }
          if(first == 3){
            G_chord.push(d);
            G_number.push(dd);
            }
            if(first == 2){
              G_chord.push(e);
              G_number.push(ee);
              }
              if(first == 1){
                G_chord.push(f);
                G_number.push(ff);
                }
    console.log(G_chord);
    console.log(G_number);
  }

  const [str, setStr] = useState(false);


  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../Assect/Images/guitar2.png')} style={[styles.bgimage]} >

        {str == false ?
          <Pressable onPress={() => { setStr(true) }} style={styles.rec}
          >
            <View style={{width:'40%',height:'40%',backgroundColor:'red'}}>
            </View>
          </Pressable>
          :
          <Pressable onPress={handle} onPressOut={() => { setStr(false) }} style={styles.rec}>
            <View style={{width:'40%',height:'40%',backgroundColor:'green'}}>
            </View>
          </Pressable>
        }

        <Dialog.Container visible={visible}>
          <Dialog.Title>Enter Tune Name</Dialog.Title>
          <Dialog.Input label="Name"
            onChangeText={
              (text) => setName(text)
            }
            placeholder="Enter Student Name"
            value={G_name}

          >
          </Dialog.Input>
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="OK" onPress={() => { insertData(); setVisible(false) }} />
        </Dialog.Container>


        {/* String 6 */}

        <View style={[styles.string]}>

          <TouchableWithoutFeedback onPress={() => { setString6(1) }}  onPressIn={() => { setFirst(6) }} onLongPress={() => { setString6(12) }}
          >
            <View style={[styles.txt1]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString6(2) }} onPressIn={() => { setFirst(6) }} onLongPress={() => { setString6(12) }} 
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString6(3) }} onPressIn={() => { setFirst(6) }} onLongPress={() => { setString6(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString6(4) }} onPressIn={() => { setFirst(6) }} onLongPress={() => { setString6(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString6(5) }} onPressIn={() => { setFirst(6) }} onLongPress={() => { setString6(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString6(6) }} onPressIn={() => { setFirst(6) }} onLongPress={() => { setString6(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString6(7) }} onPressIn={() => { setFirst(6) }} onLongPress={() => { setString6(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString6(8) }} onPressIn={() => { setFirst(6) }} onLongPress={() => { setString6(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString6(9) }} onPressIn={() => { setFirst(6) }} onLongPress={() => { setString6(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString6(10) }} onPressIn={() => { setFirst(6) }} onLongPress={() => { setString6(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString6(11) }} onPressIn={() => { setFirst(6) }} onLongPress={() => { setString6(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>
          {str == true ?
            <TouchableWithoutFeedback
              onPress={() => { A.stop(() => A.play(success => !success && A.reset()));addArray() }}
              hitSlop={{ top: 50, bottom: 100, left: 10, right: 0 }}
            
            >
              <View style={[styles.txt12]}>
              </View>
            </TouchableWithoutFeedback>
            :
            <TouchableWithoutFeedback onPress={() => { A.stop(() => A.play(success => !success && A.reset())); }}
              hitSlop={{ top: 50, bottom: 100, left: 10, right: 0 }}
            >
              <View style={[styles.txt12]}>
              </View>
            </TouchableWithoutFeedback>
          }

        </View>

        {/* String 5 */}

        <View style={[styles.string]}>

          <TouchableWithoutFeedback onPress={() => { setString5(1) }} onPressIn={() => { setFirst(5) }} onLongPress={() => { setString5(12) }}
          >
            <View style={[styles.txt1]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString5(2) }} onPressIn={() => { setFirst(5) }}  onLongPress={() => { setString5(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString5(3) }} onPressIn={() => { setFirst(5) }} onLongPress={() => { setString5(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString5(4) }} onPressIn={() => { setFirst(5) }} onLongPress={() => { setString5(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString5(5) }} onPressIn={() => { setFirst(5) }} onLongPress={() => { setString5(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString5(6) }} onPressIn={() => { setFirst(5) }} onLongPress={() => { setString5(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString5(7) }} onPressIn={() => { setFirst(5) }} onLongPress={() => { setString5(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString5(8) }} onPressIn={() => { setFirst(5) }} onLongPress={() => { setString5(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString5(9) }} onPressIn={() => { setFirst(5) }} onLongPress={() => { setString5(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString5(10) }} onPressIn={() => { setFirst(5) }} onLongPress={() => { setString5(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString5(11) }} onPressIn={() => { setFirst(5) }} onLongPress={() => { setString5(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>
          {str == true ?
          <TouchableWithoutFeedback 
            onPress={() => { B.stop(() => B.play(success => !success && B.reset()));addArray(); }}
            hitSlop={{ top: 50, bottom: 100, left: 10, right: 0 }} 
          >
            <View style={[styles.txt12]}>
            </View>
          </TouchableWithoutFeedback>
             :
          <TouchableWithoutFeedback onPress={() => { B.stop(() => B.play(success => !success && B.reset())); }}
          hitSlop={{ top: 50, bottom: 100, left: 10, right: 0 }}
          >
          <View style={[styles.txt12]}>
          </View>
          </TouchableWithoutFeedback>
           }
        </View>

        {/* String 4 */}

        <View style={[styles.string]}>

          <TouchableWithoutFeedback onPress={() => { setString4(1) }} onPressIn={() => { setFirst(4) }} onLongPress={() => { setString4(12) }}
          >
            <View style={[styles.txt1]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString4(2) }} onPressIn={() => { setFirst(4) }} onLongPress={() => { setString4(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString4(3) }} onPressIn={() => { setFirst(4) }} onLongPress={() => { setString4(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString4(4) }} onPressIn={() => { setFirst(4) }} onLongPress={() => { setString4(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString4(5) }} onPressIn={() => { setFirst(4) }} onLongPress={() => { setString4(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString4(6) }} onPressIn={() => { setFirst(4) }} onLongPress={() => { setString4(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString4(7) }} onPressIn={() => { setFirst(4) }} onLongPress={() => { setString4(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString4(8) }} onPressIn={() => { setFirst(4) }} onLongPress={() => { setString4(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString4(9) }} onPressIn={() => { setFirst(4) }} onLongPress={() => { setString4(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString4(10) }} onPressIn={() => { setFirst(4) }} onLongPress={() => { setString4(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString4(11) }} onPressIn={() => { setFirst(4) }} onLongPress={() => { setString4(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          {str == true ?
          <TouchableWithoutFeedback 
            onPress={() => { C.stop(() => C.play(success => !success && C.reset())); addArray()}}
            hitSlop={{ top: 50, bottom: 100, left: 10, right: 0 }} 
          >
            <View style={[styles.txt12]}>
            </View>
          </TouchableWithoutFeedback>
          :
          <TouchableWithoutFeedback onPress={() => { C.stop(() => C.play(success => !success && C.reset())); }}
            hitSlop={{ top: 50, bottom: 100, left: 10, right: 0 }}
          >
            <View style={[styles.txt12]}>
            </View>
          </TouchableWithoutFeedback>
}

        </View>

        {/* String 3 */}

        <View style={[styles.string]}>

          <TouchableWithoutFeedback onPress={() => { setString3(1) }} onPressIn={() => { setFirst(3) }} onLongPress={() => { setString3(12) }}
          >
            <View style={[styles.txt1]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString3(2) }} onPressIn={() => { setFirst(3) }} onLongPress={() => { setString3(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString3(3) }} onPressIn={() => { setFirst(3) }} onLongPress={() => { setString3(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString3(4) }} onPressIn={() => { setFirst(3) }} onLongPress={() => { setString3(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString3(5) }} onPressIn={() => { setFirst(3) }} onLongPress={() => { setString3(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString3(6) }} onPressIn={() => { setFirst(3) }} onLongPress={() => { setString3(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString3(7) }} onPressIn={() => { setFirst(3) }} onLongPress={() => { setString3(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString3(8) }} onPressIn={() => { setFirst(3) }} onLongPress={() => { setString3(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString3(9) }} onPressIn={() => { setFirst(3) }} onLongPress={() => { setString3(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString3(10) }} onPressIn={() => { setFirst(3) }} onLongPress={() => { setString3(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString3(11) }} onPressIn={() => { setFirst(3) }} onLongPress={() => { setString3(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          {str == true ?
          <TouchableWithoutFeedback 
            onPress={() => { D.stop(() => D.play(success => !success && D.reset()));addArray()}}
            hitSlop={{ top: 50, bottom: 100, left: 10, right: 0 }} 
          >
            <View style={[styles.txt12]}>
            </View>
          </TouchableWithoutFeedback>
          :
          <TouchableWithoutFeedback onPress={() => { D.stop(() => D.play(success => !success && D.reset())); }}
          hitSlop={{ top: 50, bottom: 100, left: 10, right: 0 }}
        >
          <View style={[styles.txt12]}>
          </View>
        </TouchableWithoutFeedback>
        }

        </View>

        {/* String 2 */}

        <View style={[styles.string]}>

          <TouchableWithoutFeedback onPress={() => { setString2(1) }} onPressIn={() => { setFirst(2) }} onLongPress={() => { setString2(12) }}
          >
            <View style={[styles.txt1]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString2(2) }} onPressIn={() => { setFirst(2) }} onLongPress={() => { setString2(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString2(3) }} onPressIn={() => { setFirst(2) }} onLongPress={() => { setString2(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString2(4) }} onPressIn={() => { setFirst(2) }} onLongPress={() => { setString2(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString2(5) }} onPressIn={() => { setFirst(2) }} onLongPress={() => { setString2(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString2(6) }} onPressIn={() => { setFirst(2) }} onLongPress={() => { setString2(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString2(7) }} onPressIn={() => { setFirst(2) }} onLongPress={() => { setString2(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString2(8) }} onPressIn={() => { setFirst(2) }} onLongPress={() => { setString2(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString2(9) }} onPressIn={() => { setFirst(2) }} onLongPress={() => { setString2(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString2(10) }} onPressIn={() => { setFirst(2) }} onLongPress={() => { setString2(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString2(11) }} onPressIn={() => { setFirst(2) }} onLongPress={() => { setString2(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          {str == true ?
          <TouchableWithoutFeedback 
            onPress={() => { E.stop(() => E.play(success => !success && E.reset()));addArray()}}
            hitSlop={{ top: 50, bottom: 100, left: 10, right: 0 }} 
          >
            <View style={[styles.txt12]}>
            </View>
          </TouchableWithoutFeedback>
          :
          <TouchableWithoutFeedback onPress={() => { E.stop(() => E.play(success => !success && E.reset())); }}
          hitSlop={{ top: 50, bottom: 100, left: 10, right: 0 }}
        >
          <View style={[styles.txt12]}>
          </View>
        </TouchableWithoutFeedback>
        }

        </View>

        {/* String 1 */}

        <View style={[styles.string]}>

          <TouchableWithoutFeedback onPress={() => { setString1(1) }} onPressIn={() => { setFirst(1) }} onLongPress={() => { setString1(12) }}
          >
            <View style={[styles.txt1]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString1(2) }} onPressIn={() => { setFirst(1) }} onLongPress={() => { setString1(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString1(3) }} onPressIn={() => { setFirst(1) }} onLongPress={() => { setString1(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString1(4) }} onPressIn={() => { setFirst(1) }} onLongPress={() => { setString1(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString1(5) }} onPressIn={() => { setFirst(1) }} onLongPress={() => { setString1(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString1(6) }} onPressIn={() => { setFirst(1) }} onLongPress={() => { setString1(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString1(7) }} onPressIn={() => { setFirst(1) }} onLongPress={() => { setString1(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString1(8) }} onPressIn={() => { setFirst(1) }} onLongPress={() => { setString1(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString1(9) }} onPressIn={() => { setFirst(1) }} onLongPress={() => { setString1(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString1(10) }} onPressIn={() => { setFirst(1) }} onLongPress={() => { setString1(12) }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={() => { setString1(11) }} onPressIn={() => { setFirst(1) }} onLongPress={() => { setString1(12) }}
            hitSlop={{ top: 0, bottom: 0, left: 0, right: 10 }}
          >
            <View style={[styles.txt]}>
            </View>
          </TouchableWithoutFeedback>

          {str == true ?
          <TouchableWithoutFeedback 
            onPress={() => { F.stop(() => F.play(success => !success && F.reset()));addArray() }}
            hitSlop={{ top: 50, bottom: 100, left: 0, right: 10 }}
          >
            <View style={[styles.txt12]}>
            </View>
          </TouchableWithoutFeedback>
          :
          <TouchableWithoutFeedback onPress={() => { F.stop(() => F.play(success => !success && F.reset())); }}
          hitSlop={{ top: 50, bottom: 100, left: 0, right: 10 }}
        >
          <View style={[styles.txt12]}>
          </View>
        </TouchableWithoutFeedback>
         }

        </View>

      </ImageBackground>

    </View>

  );
}

const Stack = createNativeStackNavigator();

export default function Simulator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>

        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen name="Recording" component={Recording}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
})