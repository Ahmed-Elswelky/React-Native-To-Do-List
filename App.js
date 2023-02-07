import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Keyboard, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {TaskInputText} from './components/taskInputText'
import {TaskItem} from './components/taskItem'



export default function App() {
  const [tasks,setTasks] = useState([])
  const [done,setDone] = useState(false)
  const addTask=(task)=>{
    setTasks([
      ...tasks,
      task
    ]);
    Keyboard.dismiss()
    
  }
  const deleteTask = (deletedindex)=>{
    setTasks(tasks.filter((task,index)=>index !=deletedindex))
  }
  const deleteAll = ()=>{
    setTasks([])
    setDone(false)
  }
  const doneAll = ()=>{
    setDone(true)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor='black' />
      <Text style={{ borderWidth:2,
                      borderRadius:50,
                      borderColor:"black",
                      backgroundColor:"#273fa3",
                      marginHorizontal:50,
                      marginBottom:40,
                      padding:10,
                      color:"white",
                      width:200,
                      textAlign:"center",
                      fontWeight:"bold"
    }}>To Do App</Text>
      <TaskInputText addTask={addTask}></TaskInputText>
      <ScrollView>
      {tasks.map((task,idx)=>{
          return (
            <View key={idx} style={done && styles.done } >
              <TaskItem
              task={task} 
              index={idx+1}
              deleteTask={()=>{
                deleteTask(idx)
              }} 
              ></TaskItem>
            </View>
        
          );
        })}
        <View style={{flexDirection:"row", marginTop:20}}>
          <TouchableOpacity 
          onPress={deleteAll}
          style={styles.btn}>
            <Text style={{color:"white"}}>Clear All</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={doneAll}
          style={styles.btn}>
            <Text style={{color:"white"}}>Done All</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"space-between"
  },
  btn:{
    borderWidth:2,
    borderRadius:50,
    borderColor:"black",
    backgroundColor:"#273fa3",
    marginHorizontal:50,
    padding:10


  },
  done:{
    borderWidth:5,
    borderColor:"green",
    padding:10,
    margin:10

  }
});
