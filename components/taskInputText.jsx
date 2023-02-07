import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
import { useState } from "react";


export const TaskInputText = (props)=>{
    const [task,setTask]=useState("");
    const addTaskHandle = (value)=>{
        if(task == ""){
            alert("Enter Your Task")
        }else{

            props.addTask(value)
            setTask("")
        }

    }
    return (
        //All Components
    <View style={{flexDirection:"row", alignItems:"center"}}>
    <TextInput 
    placeholder="Enter Your Task"
    style={styles.input}
    onChangeText={(txt)=>{
        setTask(txt);
    }}
    value={task}
    ></TextInput>
    {/* Add Button */}
    <TouchableOpacity
    onPress={()=>{
        addTaskHandle(task)
    }}
    >
    <View style={{backgroundColor:"green",padding:5, borderRadius:10,marginHorizontal:20 }}>
    <Text>
        <MaterialIcons name="keyboard-arrow-down" size={30} color="white"></MaterialIcons>
    </Text>
    </View>
    </TouchableOpacity>
</View>
    )
    
}



const styles = StyleSheet.create({
    input:{ 
        borderWidth:2,
        padding:8,
        width:250,
        borderRadius:20,
        textAlign:"center",
    }
})


