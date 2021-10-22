import React from 'react';
import styled from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DIDCreatePage, WelcomePage, BlankCardPage, 
        AddCardPage, CompleteAddCardPage, CardPage, QRPage } from '../screens';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../colors/Theme';
import { View, Text, StyleSheet } from 'react-native'
import { useWindowDimensions } from 'react-native';
import menuDrawer from '../components/drawNavi/DrawerNavigation';
//import DrawerNavigation from '../components/drawNavi/DrawerNavigation';

const Stack = createStackNavigator();

const HeaderInput = styled.View`
    width: ${({width}) => width - 40}px;
`;

const AuthStack = (props) => {
    const width = useWindowDimensions().width;
    const initialRoute = props.initialRouteName;
    const userVC = props.userVC;
    const did = props.did;
    const userFicture = props.userFicture;
    console.log(did);
    //console.log(initialRoute);
    //console.log(userFicture);
    return (
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen name="WelcomePage" component={WelcomePage}
                options={{ headerShown: false }}
            />
            {/*<Stack.Screen name="DIDCreatePage" component={DIDCreatePage}
                options={{ headerShown: false }}   
            />*/}
            <Stack.Screen name="BlankCardPage" component={BlankCardPage}
                options={{ headerShown: false }}
            // ***userDID 전달 ***
            // initialParams={{ userVC : userVC }}
            />
            <Stack.Screen name="AddCardPage" component={AddCardPage}
                //userDID={userDID}
                options={{
                    headerTitleAlign: 'center',
                    // 헤더라인 제거 기능?
                    headerTitle: ({style})=> (
                        <HeaderInput style={styles.container} width={width}>
                        <View/>
                        <View style={styles.viewContainer}>
                        <Text style={{ fontSize: 20, color: theme.mono800 }}>
                            {'  '}모바일 사원증 발급
                        </Text>
                        </View>
                        <View style={styles.viewContainer}>
                        <MaterialCommunityIcons
                    size={60}
                    name="menu"
                    color={theme.mono200}
                    style={style}
                    margin='30px'
                />
                </View>
                </HeaderInput>
                    ),
                    headerBackTitleVisible: false,
                }}
            /> 
            <Stack.Screen name="CompleteAddCardPage" component={CompleteAddCardPage}
                options={{ headerShown: false }}
                initialParams={{ userVC : userVC, did : did}}
            />
            <Stack.Screen name="CardPage" component={CardPage}
                options={{ headerShown: false }}
                initialParams={{ did : did, userVC : userVC, userFicture : userFicture }}
            />
            <Stack.Screen name="QRPage" component={QRPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="menuDrawer" component={menuDrawer}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      flex: 1,
    },
    viewContainer: {
        justifyContent: 'center',
        alignContent: 'center',
    }
});

export default AuthStack;