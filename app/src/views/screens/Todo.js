import React, { useState } from 'react';
import { StyleSheet, View, Text, Keyboard, KeyboardAvoidingView, TextInput, Platform, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import STYLES from '../../styles';
import Task from '../components/Task';

export default function TodoList() {

    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }



    return (

        <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        
            <View style={STYLES.taskWrapper }>
                <Text style={STYLES.sectionTitle}>
                    Today's Task
                </Text>

                <View style={STYLES.items}>
                    {
                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                    <Task text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
             </View>
           
            
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={STYLES.writeTaskWrapper}
                >
                    <TextInput style={STYLES.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
                    <TouchableOpacity onPress={() => handleAddTask()} >
                        <View styles={STYLES.addWrapper}>
                            <Text style={STYLES.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            
                </ScrollView>
    );
}

