import { styles } from './app.styles.js';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'


export default function App() {
    // consts and variables needed for results input/output
    const [resultIn100, setResultIn100] = useState('0');

    var [ectsResult, setEctsResult] = useState(' ');
    var accepted = ' ';

    // determination of the results
    if (resultIn100 > 100) {
        ectsResult = 'Та брешеш ти:)';
    }
    else if (resultIn100 >= 90 && resultIn100 <= 100) {
        ectsResult = 'A';
        accepted = 'Зараховано'
    }
    else if (resultIn100 >= 82 && resultIn100 <= 89) {
        ectsResult = 'B';
        accepted = 'Зараховано'
    }
    else if (resultIn100 >= 75 && resultIn100 <= 81) {
        ectsResult = 'C';
        accepted = 'Зараховано'
    }
    else if (resultIn100 >= 64 && resultIn100 <= 74) {
        ectsResult = 'D';
        accepted = 'Зараховано'
    }
    else if (resultIn100 >= 60 && resultIn100 <= 63) {
        ectsResult = 'E';
        accepted = 'Зараховано'
    }
    else if (resultIn100 >= 35 && resultIn100 <= 59) {
        ectsResult = 'FX';
        accepted = 'Незараховано'
    }
    else if (resultIn100 >= 1 && resultIn100 <= 34) {
        ectsResult = 'F';
        accepted = 'Незараховано'
    }

    // font load check
    let [fontsLoaded] = useFonts({
        'JetBrains Mono': require('./assets/fonts/JetBrainsMono-Regular.ttf')
    })
    if (!fontsLoaded) {
        return null;
    }

    // UI:
    return (
        <View style={styles.container}>
            <LinearGradient colors = {['#5E84C3', '#A1B6D9']}
                            start = {{x: 1, y: 0}}
                            end = {{x: 0, y: 1}} 
                            style = {styles.background}>
                    
                <View style = {styles.resultView}>
                    <Text style = {styles.text}>Введіть результат у 100-бальній шкалі:</Text>
                    <View style = {styles.inputView}>
                        <TextInput 
                                placeholderTextColor={'#5E84C3'}
                                textAlign='center' 
                                style={styles.input}
                                maxLength={3}
                                placeholder={"Введіть ваш результат"}
                                keyboardType={'number-pad'}
                                onChangeText={(val) => setResultIn100(val)}
                        />
                    </View>
                    <Text style = {styles.text}>Оцінка за шкалою ECTS:</Text>
                    <Text style={[styles.text,{ fontSize: 24, marginTop: 30}]}>{ectsResult}</Text>
                    <Text style={[styles.text,{ fontSize: 18, marginTop: 5}]}>{accepted}</Text>
                </View>
                
                <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end',}}>
                    <Text style={[styles.text,{ fontSize: 12}]} >v.0.0.1</Text>
                    <Text style={[styles.text,{ fontSize: 12, marginBottom: 10}]} >2023</Text>
                </View>

                <StatusBar style="auto" />
            </LinearGradient>
        </View>
    );
}
