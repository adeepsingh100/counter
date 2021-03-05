import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity } from 'react-native';

class counter extends React.Component{
  
    state = {
      count: null,
      value : 0
    };
  
  
  incrementCount = () => {
    this.setState({
      count: true
    });
  };

  decrementCount = () => {
    this.setState({
      count: false
    });
  };

  countPress = () => {
   const {count,value} = this.state

   if(count === null)
   {
     alert("Please Selete the + or - Button First")
   }
   else if (count)
   {
    this.setState(({

      value : value + 1 
    }))
   }
   else {

    this.setState(({  

      value : value - 1 
    }))
   }
  }

  render(){
    const { count,value } = this.state;
    return(
      <View style={styles.Container}>
        <View style={styles.ViewClear}>
          <TouchableOpacity style={styles.clear} onPress={() => this.setState({count:null, value :0})}>
            <Text>Clear</Text> 
            </TouchableOpacity>
        </View>
        <View style={styles.ViewText}>
          <Text style={{color:'white', fontSize:70}}>{value}</Text>
        </View>
        <View style={styles.btnView}>
          <View>
          <TouchableOpacity style={styles.plusbtn} onPress={this.incrementCount}>
            <Text style={styles.text}>+</Text> 
          </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.minusbtn} onPress={this.decrementCount}>
              <Text style={styles.text}>-</Text> 
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ViewCount}>
          <TouchableOpacity style={styles.Count} onPress={this.countPress}>
            <Text style={styles.text}>Count</Text> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
Container: {
  flex:1,
  backgroundColor:"black",
},
ViewClear:{
  alignItems:'flex-end',
 
},
clear:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:30,
  marginRight:20,
  backgroundColor:'white',
  
  height:30,
  width:100,
  borderRadius:10,
},
ViewText:{
  alignItems:"center",
  justifyContent:"center",
  height:80,
  marginTop:40,
},
text:{
  fontSize:40,
},
btnView:{
  justifyContent:'center',
  height:300,
  flexDirection:'row',
  padding:150,
},
plusbtn:{
  height:50,
  width:100,
  backgroundColor:'white',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10,

},  
minusbtn:{
  height:50,
  backgroundColor:'white',
  justifyContent:'center',
  width:100,
  alignItems:'center',
  marginLeft:140,
  borderRadius:10,
},  
ViewCount:{

  justifyContent:'center',
  alignItems:'center',
},
Count:{
  backgroundColor:'white',
  width:200,
  height:80,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10,
},

});

export default counter;