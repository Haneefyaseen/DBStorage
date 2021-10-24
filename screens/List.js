import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput } from 'react-native';
import database from '@react-native-firebase/database'
import Button from "../components/Button";

const List = () => {

    const [text, setText] = useState('')
    //Setting up the firebase database connection
    const db = database();

    const [data, setData] = useState([])

    //Logging the database values to the console
    // useEffect(() => {
    //     db.on('value', snapshot => {
    //         console.log(snapshot.val())
    //     })
    //     console.log(data)
    // }, [])



    //Fetching the data from firebase database
    async function fetchData() {
        return db.ref(text).on('value', snapshot => {
            setData(snapshot.val())
        })
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                textAlign='center'
                
                placeholder="Search"
                placeholderTextColor='grey'
                onChangeText={(value) => setText(value)}
            />
            <Button onClick={fetchData} title="Get Data" />
            < Text style={styles.text}>{data.name +'-'+data.id}</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'green',
        marginTop: 10,
        fontSize: 30,
        borderWidth: 1
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        color: 'black'
    }
})

export default List;