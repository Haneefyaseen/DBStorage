import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import Button from '../components/Button';

const Login = ({ navigation }) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0)

    const onSubmit = () => {
        if (name.length > 3 && age > 0 && typeof (age) === 'number') {
            navigation.navigate("Home", { Name: name, Age: age })
        } else {
            Alert.alert("Error!", "Empty Field", [{ text: "Ok" }])
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your name'
                    placeholderTextColor='black'
                    onChangeText={(value) => { setName(value) }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Enter your age'
                    placeholderTextColor='black'
                    onChangeText={(value) => setAge(parseInt(value))}
                    keyboardType='number-pad'
                />
                <Button
                    onClick={onSubmit}
                    title="Submit"
                />
                <Button
                    onClick={() => {navigation.navigate("List")}}
                    title="Display"
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lavender',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    input: {
        flex: 1,
        maxHeight: 40,
        color: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: 250,
        textAlign: 'center',
        marginTop: 20,
    },
})

export default Login;