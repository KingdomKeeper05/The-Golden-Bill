import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to the Financial Wellness App!</Text>
            <Button
                title="Go to Financial Literacy Game"
                onPress={() => navigation.navigate('FinancialLiteracyGame')}
            />
            <Button
                title="Explore AI Integration"
                onPress={() => navigation.navigate('AIIntegration')}
            />
            <Button
                title="Learn about Blockchain"
                onPress={() => navigation.navigate('Blockchain')}
            />
        </View>
    );
};

export default HomeScreen;