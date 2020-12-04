import React, { Component } from 'react';
import {Button} from 'react-native'

export default class CustomButton extends Component{

constructor(){
super()
}

render(){
    const {color, onClick}= this.props;
    return(
<Button color={color} onPress={()=>onClick(color)} title={color}></Button>
    )
}

}