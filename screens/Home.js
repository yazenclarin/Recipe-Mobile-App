import React, { useState } from "react";
import {View, SafeAreaView, Button, Text, TouchableOpacity, Modal, Image} from 'react-native'
import { styles } from './style/style';


export default function Home({navigation}){
  const [modalOpen, setModalOpen] = useState(false);
   
  return(
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>The Recipe</Text>
        <Text style={styles.subtitle}>Filipino Foods</Text>
      </View> 

      {/* Menu button */}
      <TouchableOpacity style={styles.menuBttn} onPress={() => setModalOpen(true)}>
        <Image
          style={{width:34, height:34}}
          source={require('../assets/menu.png')}
        />
      </TouchableOpacity>

    
      {/* Menu Modal */}
      <Modal visible={modalOpen} animationType="fade">
        <View style={styles.modalBG}>
          <View style={styles.menuModal}>

          <TouchableOpacity  style={styles.menu} onPress = {() => navigation.navigate('Home')}>
            <Text>Home</Text>
          </TouchableOpacity >

          <TouchableOpacity  style={styles.menu} onPress = {() => navigation.navigate('MainDish')}>
            <Text>Main dish</Text>
          </TouchableOpacity >

          <TouchableOpacity  style={styles.menu} onPress = {() => navigation.navigate('SideDish')}>
            <Text>side dish</Text>
          </TouchableOpacity >

          <TouchableOpacity  style={styles.menu} onPress = {() => navigation.navigate('Desserts')}>
            <Text>desserts</Text>
          </TouchableOpacity >    
          </View>
        </View>

        <TouchableOpacity style={styles.menuBttn} onPress={() => setModalOpen(false)}>
        <Image
          style={{width:34, height:34}}
          source={require('../assets/close.png')}
        />
      </TouchableOpacity>
      </Modal>

      {/* Body */}
      <View style={styles.bodyContainer}>

        <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit amet.
        </Text>

        <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('MainDish')}>
          <Text>main dish</Text>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.box} onPress = {() => navigation.push('SideDish')}>
          <Text>side dish</Text>
        </TouchableOpacity >
        <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('Desserts')}>
          <Text>desserts</Text>
        </TouchableOpacity >        
        <TouchableOpacity  style={styles.box} onPress = {() => navigation.navigate('AllRecipe')}>
          <Text>all</Text>
        </TouchableOpacity >    
      </View>  

    </SafeAreaView>
    )
}