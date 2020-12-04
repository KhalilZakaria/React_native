import React, { Component, PureComponent } from 'react';
import {View, Text} from 'react-native'

export default class ColorSurface extends Component{

constructor(){
super();
}

render(){
    const {color}=this.props;
    return(
       <View style={{backgroundColor:color, 
       height: 200}}>
           <Text>{color}</Text>
       </View>
    )
}

}