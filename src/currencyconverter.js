import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');

    const convertCurrency = () => {
        // Add your currency conversion logic here
        // Use an API or custom conversion rates

        // Example conversion: USD to EUR
        const conversionRate = 0.85;
        const convertedValue = parseFloat(amount) * conversionRate;

        setConvertedAmount(convertedValue.toFixed(2));
    };

    const styles = {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginbottom: 40,
        },
    };

    return (
        <View style = {styles.container}>
            <Text>Enter amount in USD:</Text>
            <TextInput 
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                placeholder="Enter amount"
            />
            <Button title="Convert" onPress={convertCurrency} />
            {convertedAmount !== '' && (
                <Text>Converted amount: {convertedAmount} EUR</Text>
            )}
        </View>
    );
};

export default CurrencyConverter;