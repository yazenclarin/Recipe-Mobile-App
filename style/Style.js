import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, Modal, TouchableOpacity} from 'react-native';

class Home extends React.Component{
constructor(){
  super();
  this.state={
    show:false
  }
}
  render(){
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>The Recipe</Text>
          <Text style={styles.subtitle}>Filipino Foods</Text>
        </View>      

        {/* Menu button */}
        <TouchableOpacity style={styles.menuBttn} onPress={() => {this.setState({show:true})}}>
          <Image
            style={{width:34, height:34}}
            source={require('./assets/img/menu.png')}
          />
        </TouchableOpacity>

        {/* Menu Modal */}
        <Modal transparent={true} visible={this.state.show} animationType="fade">
          <View style={styles.modalBG}>
            <View style={styles.menuModal}>

            <TouchableOpacity  style={styles.menu}>
              <Text>Home</Text>
            </TouchableOpacity >

            <TouchableOpacity  style={styles.menu}>
              <Text>ain dish</Text>
            </TouchableOpacity >

            <TouchableOpacity  style={styles.menu}>
             <Text>side dish</Text>
            </TouchableOpacity >

            <TouchableOpacity  style={styles.menu}>
              <Text>desserts</Text>
            </TouchableOpacity >    
            </View>
          </View>

          <TouchableOpacity style={styles.menuBttn} onPress={() => {this.setState({show:false})}}>
            <Image
              style={{width:34, height:34}}
              source={require('./assets/img/menu.png')}
            />
          </TouchableOpacity>
        </Modal>

        {/* Body */}
        <View style={styles.bodyContainer}>

          <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem viverra aliquet eget sit amet.
          </Text>

          <TouchableOpacity  style={styles.box}>
            <Text>main dish</Text>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.box}>
           <Text>side dish</Text>
          </TouchableOpacity >
          <TouchableOpacity  style={styles.box}>
            <Text>desserts</Text>
          </TouchableOpacity >        
          <TouchableOpacity  style={styles.box}>
            <Text>all</Text>
          </TouchableOpacity >    
        </View>

      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
  },

  // Header
  header:{
    backgroundColor: "#fff",
    paddingVertical: 22,
    borderBottomWidth: 1.5,
    alignItems: 'center',
    width: "100%",
    borderBottomColor: "black",
  },
  title:{
    fontFamily: 'Roboto',
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  subtitle:{
    borderRadius: 5,
    borderWidth: .5,
    fontSize: 18,
    paddingHorizontal: 20,
    color: "white",
    backgroundColor: "#f57b42",
  },
  

  // Menu button
  menuBttn:{
    backgroundColor: "#f57b42",
    position: "absolute",
    right: "8%",
    bottom: "8%",
    padding: 14,
    borderRadius: 100,
    borderWidth: .5,
    elevation: 10,
  },

  // Menu Modal 
  modalBG:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "rgba(0,0,0,.5)",
  },
  menuModal:{
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height:"80%",
    width:"80%",
    backgroundColor: "#fff",
  },
  menu:{
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    width: "85%",
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 1.5,
  },

  // Body
  bodyContainer:{
    width: "100%",
    height: "85%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  description:{
    padding: 5,
    margin: 10,
    lineHeight: 25,
  },
  box:{
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    width: "38%",
    height: "28%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2.5,
  }


});

export default Home;