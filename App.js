
import React, { useState } from 'react';
import { Button, View, StyleSheet,FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

import GoalInput from './components/GoalInput';

//

export default function App() {

  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalAdded,setModal] = useState(false);

 

  const onAddBtnPressed = (goaltext) => {
    setCourseGoals(courses => [...courses, {
      key:Math.random().toString(),
      data:goaltext
    }]);
     setModal(false);

  }

  const onItemDeleted = (key)=>{

    setCourseGoals(currentGoals=>{
      return currentGoals.filter(goal=> goal.key !== key )
    })

  };
  const onCancleClicked = ()=>{
    setModal(false);
  };
  return (
    
    <View style={style.container}>

    <Button title="add New Goals" onPress={()=>setModal(true)}/>
     
    <GoalInput visible={isModalAdded} onAddPressed ={onAddBtnPressed} onCancle={onCancleClicked} />

      <FlatList data={courseGoals} renderItem = {itemData=>
       <GoalItem title = {itemData.item.data} id={itemData.item.key} deleteItem={onItemDeleted}/> } 
          />
       

    </View>



  );
}
const style = StyleSheet.create({
  container: { padding: 50 }
  
});

