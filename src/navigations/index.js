import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

const Navigation = (props) => {
    const initialRoute = props.initialRoute;
    const userVC = props.userVC;
    const did = props.did;
    return (
        <NavigationContainer>
            <AuthStack initialRouteName={initialRoute} userVC={userVC} did={did} />
        </NavigationContainer>
    );
};

export default Navigation;