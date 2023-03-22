import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStack } from '../../src/navigators/RootNavigator';

export const Root = () => {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
};