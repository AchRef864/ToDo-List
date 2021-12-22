import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#b0b0b0',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20, 
    },
    itemleft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#2a1e52',
        borderRadius: 5,
        opacity: 0.4,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#2a1e52',
        borderWidth: 2,
        borderRadius: 25,
    },
});

export default Task;