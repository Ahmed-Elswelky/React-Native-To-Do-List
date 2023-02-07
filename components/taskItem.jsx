import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
import { useState } from "react";




export const TaskItem = (props)=>{
    const [done,setDone]=useState(false);
    const taskDone =(()=>{
        setDone(true)
        
    })

    return(
    <View style={done && styles.done }>
        <View >
            <Text style={{marginHorizontal:10, margin:5,fontSize:20,fontWeight:"bold"}}>Idx: {props.index}</Text>
        </View>
        
        <View>
            <Text style={{marginHorizontal:4, margin:5,fontSize:20,fontWeight:"bold"}}>Task: {props.task}</Text>
        </View>
        
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity
            style={{marginRight:20, marginBottom:5,fontSize:20}}
            onPress={props.deleteTask}
            >
            <MaterialIcons name="delete" color="red" size={30}></MaterialIcons>
            </TouchableOpacity>

            <TouchableOpacity
            style={{marginLeft:20, marginBottom:40}}
            onPress={taskDone}
            >
            <MaterialIcons name="done" color="green" size={30}></MaterialIcons>
            </TouchableOpacity>
        </View>
    </View>
    )
}




const styles = StyleSheet.create({
done:{
    borderWidth:5,
    borderColor:"green",
    padding:10,
    margin:10

}
});