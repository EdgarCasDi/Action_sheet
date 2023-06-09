import { View, Text } from 'react-native'
import React from 'react'

// Native base imports
import { Button } from "native-base";

const Option2 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Option 2</Text>
            <Button color='#ff4a23' mt='5' onPress={() => navigation.goBack()}>Go Back</Button>
        </View>
    )
}

export default Option2