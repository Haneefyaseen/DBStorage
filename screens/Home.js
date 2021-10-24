import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const Home = ({ route, navigation }) => {

    const {Name, Age} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome {Name}
            </Text>
            <Text style={styles.text}>Age is {Age}</Text>
            <Button 
                title="Update"
                onClick={() => {navigation.setParams({Name: 'Yaseen', Age: 12})}}
            />
            <Button 
                title="Increase count"
                onClick={() => navigation.setParams({Name: Name, Age: Age+1})}
            />
            <Button 
                title="Back to Login"
                onClick={() => navigation.navigate("Login")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: 'black'
    }
})

export default Home;