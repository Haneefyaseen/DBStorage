import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const Button = (props) => {
    return ( 
        <Pressable
            style={styles.button}
            android_ripple={{
                radius: 80,
                color: 'white'
            }}
            onPress={props.onClick}
        >
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
     );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'indigo',
        padding: 10,
        marginTop: 10, 
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    }
})
 
export default Button;