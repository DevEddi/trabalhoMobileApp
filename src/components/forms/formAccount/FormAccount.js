import React from 'react';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { KeyboardAvoidingView } from 'react-native';

import { 
  Text,
  View,
  TextInput,
  Alert,
  Switch,
  ScrollView,
} from 'react-native';

import styles from './style';
import ButtonLarge from '../../buttons/buttonLarge/ButtonLarge';
import InputInfo from '../../inputs/inputInfo/InputInfo';

export default function FormAccount() {

  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [limitAccount, setLimitAccount] = useState(0);  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const showAlert = (name, age, selectedGender, limitAccount, enable) =>
    Alert.alert(
      "Confirm your data",
          'Nome: ' + name + '\n' +
          'Age: ' + age + '\n' + 
          'Gender: ' + selectedGender + '\n' +
          'Limit: ' + parseFloat(limitAccount).toFixed(2) + '\n' +
          'Student: ' + enable,
      [
        {
          text: "Confirm",
          onPress: () => Alert.alert("Thanks Open Account"),
          style: "cancel",
        },
        {
          text: "Cancel",
          onPress: () =>  resetOpenAccount(),
          style: "cancel",
        },
      ]    
  );

  function validetionFormOpenAccount(){
      if (name != null && age != null &&  selectedGender != null && limitAccount != 0){
            showAlert(name, age, selectedGender, limitAccount, isEnabled)
      }else{
          Alert.alert('You must fill in all missing fields')
      }

  }

  function resetOpenAccount(){
      setName(null)
      setAge(null)
      setSelectedGender(null)
      setLimitAccount(0)
      setIsEnabled(false)
  }

  return (    
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={130}
    >
     <ScrollView>
      <View style={styles.container}>
            <Text style={styles.title}>Bank Morty</Text>   
            <View >

              <Text style={styles.titleInputs}>Name:</Text>
              <InputInfo
              style={styles.inputs}
                value={name}
                onChangeText={setName}  
                keyType="default"
                placeHolderName='Digit your name'
              />
              
              <Text style={styles.titleInputs}>Age:</Text>
              <InputInfo
                value={age}
                maxLength={2}
                onChangeText={setAge}   
                keyType="numeric"
                placeHolderName='Digit your age'
              />            
            </View>      
            
            <View >
              <Text style={styles.titleInputs}>Gender:</Text>
              <Picker
                style={styles.picker}
                selectedValue={selectedGender}
                onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)              
              }>
                <Picker.Item
                  style={styles.pickerItem}
                  label="Man"
                  value="Man" />
                <Picker.Item 
                  style={styles.pickerItem}
                  label="Woman"
                  value="Woman" />
              </Picker>
            </View >

            <View >
                <Text style={styles.titleInputs}>Your Limit: R$ {parseFloat(limitAccount).toFixed(2)}</Text>
                <Slider
                  style={styles.slider}
                  minimumValue={0.00}
                  maximumValue={1000.00}
                  onValueChange={setLimitAccount}
                  minimumTrackTintColor="#F7EA46"
                  maximumTrackTintColor="#fff"
                />
            </View>

            <View >
              <Text style={styles.titleInputs}>Estudante:</Text>
              <Switch
                style={styles.switch}
                trackColor={{ false: "#767577", true: "#9CB4CC" }}
                thumbColor={isEnabled ? "#F7EA46" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            
            <View >            
              <ButtonLarge
                pressFunc = {() => {validetionFormOpenAccount()}}
                nameToucha = 'Open Account'
              
              /> 
              <ButtonLarge
                pressFunc = {() => {resetOpenAccount()}}
                nameToucha = 'Reset Values'
              
              />             
            </View>                
      </View>
     </ScrollView>
    </KeyboardAvoidingView>
  );
}


