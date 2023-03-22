import React from "react";
import { Button, Actionsheet, useDisclose } from "native-base";
import { View, Text, StyleSheet } from 'react-native';

const ActionS = ({ navigation }) => {
    const { isOpen, onOpen, onClose } = useDisclose();
    return <>
        <View style={{ flex: 1, marginHorizontal: 500, justifyContent: 'center' }}>
            <Text style={[styles.text]}>Action Sheet</Text>

            <Button onPress={onOpen}>Options</Button>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content>
                    <Actionsheet.Item onPress={() => navigation.navigate('Option1', { screen: 'Option1' })}>Option 1</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => navigation.navigate('Option2', { screen: 'Option2' })}>Option 2</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => navigation.navigate('Option3', { screen: 'Option3' })}>Option 3</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </View>
    </>
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
});

export default ActionS;
