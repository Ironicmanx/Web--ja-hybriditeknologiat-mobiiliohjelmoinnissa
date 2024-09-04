import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Keyboard } from 'react-native';

const heartRate = () => {
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');

useEffect(() => {
        
    }
    , [convertedAmount]); // this will run when the convertedAmount changes

    const calculateHeartRateLimits = () => {
       
        const age = parseFloat(amount);

       
        const lowerLimit = (220 - age) * 0.65; // formula for lower limit
        const upperLimit = (220 - age) * 0.85; // formula for upper limit

        
        setConvertedAmount(`Lower Limit: ${lowerLimit.toFixed(2)} bpm, Upper Limit: ${upperLimit.toFixed(2)} bpm`);  //two decimal places

        Keyboard.dismiss();
    };

    const styles = {
        container: {
            flex: 1,
            justifyContent: 'center',
            marginBottom: 40,
            flexDirection: 'column',
            alignItems: 'center',
        },
        text: {
            marginBottom: 20,
        },
        textInput: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: 200,
            marginBottom: 20,
            padding: 10,
        },
        button: {
            marginTop: 10,
            padding: 10,
            marginBottom: 20,
        },
        resultText: {
            marginTop: 20,
        },
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter age:</Text>
            <TextInput
                style={styles.textInput}
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                placeholder="Enter age"
            />
            <Button style={styles.button} title="Calculate" onPress={calculateHeartRateLimits} />
            {convertedAmount !== '' && (
                <Text style={styles.resultText}>Heart Rate Limits: {convertedAmount} bpm</Text>
            )}
        </View>
    );
};


export default heartRate;