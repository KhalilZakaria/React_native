import React, { PureComponent, Component } from 'react';
import {FlatList, View, Text} from 'react-native';
import CustomButton from './CustomButton';
import ColorSurface from './ColorSurface';

const flatListData=[{key:'1',firstName:'Ayoub', lastName:'KHODAR', class:'3SIG'},
{key:'2',firstName:'Ayoub', lastName:'KHODAR', class:'3SIG'},
{key:'3',firstName:'Ayoub', lastName:'KHODAR', class:'3SIG'},
{key:'4',firstName:'Ayoub', lastName:'KHODAR', class:'3SIG'},
{key:'5',firstName:'Ayoub', lastName:'KHODAR', class:'3SIG'}]


 class App1 extends PureComponent {
   constructor(){
     super();
     this.state={
         listData:flatListData
     }
   }

  
 renderFlatListItem(item){
     return(
     <View style={{borderWidth:1}}>
         <Text>First Name: {item.item.firstName} </Text>
         <Text>First Name: {item.item.lastName} </Text>
         <Text>Class: {item.item.class} </Text>
     </View>
     )
 }

 deleteItem(){

    }

addItem(){
    var listData=this.state.listData;
    console.log(listData)
    listData.push({key:'7',firstName:'omar', lastName:'Bouanani', class:'SIG3'});
    this.setState({listData:listData})
}

  render (){
      const {listData}=this.state;
    return(
          <>
          <FlatList data={listData}
          renderItem={(item)=>this.renderFlatListItem(item)}
          keyExtractor={(item,index)=>  item.key.toString()}/>
           <CustomButton onClick={()=>this.deleteItem()} color='red'/>
          <CustomButton  onClick={()=>this.addItem()} color='blue'/>
          </>
    )
    }
  }
 


export default App1;

