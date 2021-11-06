import React from 'react';
import { View, StatusBar, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

const Signup = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={styles.container}>
            <View style={styles.overlay}>
                <StatusBar backgroundColor="rgba(0,0,0,0)" barStyle="light-content" />
                <Text style={styles.registerText}>Register</Text>
                <Text style={styles.subTitle}>Create account</Text>
                <View>
                    <TextInput placeholder="Username"
                        placeholderTextColor='#FFFFFD'
                        selectionColor='#FFFFFD'
                        keyboardType="default"
                        style={styles.inputField}
                        placeholderStyle={{}}
                    />
                    <TextInput placeholder="Email"
                        placeholderTextColor='#FFFFFD'
                        selectionColor='#FFFFFD'
                        keyboardType="email-address"
                        style={styles.inputField}
                    />
                    <TextInput placeholder="Password"
                        placeholderTextColor='#FFFFFD'
                        selectionColor='#FFFFFD'
                        secureTextEntry={true}
                        textContentType={'password'}
                        multiline={false}
                        password={true}
                        style={styles.inputField}
                    />
                    <TextInput placeholder="Confirm Password"
                        placeholderTextColor='#FFFFFD'
                        selectionColor='#FFFFFD'
                        secureTextEntry={true}
                        multiline={false}
                        password={true}
                        textContentType={'password'}
                        style={styles.inputField}
                    />
                    <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                        <Text style={styles.continue}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
    },
    registerText: {
        fontFamily: 'Roboto-Bold',
        color: '#FEFFFE',
        fontSize: 40,
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    subTitle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
        color: '#FEFFFE',
        paddingHorizontal: 20
    },
    inputField: {
        fontFamily: 'Roboto-Medium',
        backgroundColor: '#706D68',
        borderColor: 'transparent',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 40,
    },
    overlay: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    continue: {
       fontFamily: 'Roboto-Bold',
       borderWidth: 2,
       borderColor: 'transparent',
       borderRadius: 20,
       height: 55,
       marginHorizontal: 20,
       marginTop: 40,
       color: '#fff',
       textAlign: 'center',
       textAlignVertical: 'center',
       fontSize: 18,
       backgroundColor: '#BF5957',
    }
})

export default Signup;
