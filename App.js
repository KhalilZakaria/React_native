import React, { PureComponent, Component } from 'react';
import {FlatList} from 'react-native';
import CustomButton from './CustomButton';
import ColorSurface from './ColorSurface';

const flatListData=[{firstName:'Ayoub', lastName:"KHODAR", class:"3SIG"}]


 class App extends PureComponent {
   constructor(){
     super();
     this.state={
       color:{color:'red'}
     }
   }

  changeColor = (color) =>{
    var color={color:color}
    this.setState({color:color})
  }

  render (){
    const {color} = this.state;
    return(
          <>
          <CustomButton onClick={this.changeColor} color='red'/>
          <CustomButton  onClick={this.changeColor} color='blue'/>
          <ColorSurface color={color.color}/>
          </>
    )
    }
  }
 


export default App;

