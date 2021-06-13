import React from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import STYLES from '../../styles';

const Task = (props) => {

    return (
        <View style={STYLES.item}>
            <View style={STYLES.itemLeft}>
                <View style={STYLES.square}></View> 
                <Text style={STYLES.itemText}>{props.text}</Text>
            </View>
            <View style={STYLES.circular}></View>

        </View>
    )
}

export default Task;