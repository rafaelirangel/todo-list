import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Rendering the tasks and setting style to it
const Task = (props) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: 'lightgrey',
        padding: 15,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:20,
    },
    itemLeft:{
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemText:{
        maxWidth: '80%',
        marginLeft: 10, 
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 6,
    },

});

export default Task