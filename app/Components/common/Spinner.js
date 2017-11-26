import React, { Component } from 'react';
import { View, TextInput, Text, ActivityIndicator } from 'react-native';

const Spinner = ({ssize}) =>
{
     return(
         <View style ={{flex:1, justifyContent:'center',alignItems:'center'}}>
             <ActivityIndicator size={ssize|| 'large'}/>
             </View>

     );
         
     
}
 export {Spinner};