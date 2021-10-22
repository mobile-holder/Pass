import React, { useEffect, useState } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './colors/Main';
import Navigation from './navigations';
import { BlankCardPage, CardPage } from './screens';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.SafeAreaView`
    flex: 1;
    `

const App = () => {
    const [isReady, setReady] = useState(false);
    const [initialRoute, setInitialRoute] = useState('WelcomePage');
    const [userVC, setUserVC] = useState(undefined);
    const [did, setDid] = useState(undefined);
    const [userFicture, setUserFicture] = useState();

    useEffect(() => {
        const getUserInfo = () => { //데이터 가져오기(setUserDID 함꼐)
                //const userDID='ethr:zxufsn1v3';
                //const userDID=undefined;
                // if (userDID) { //DID만 있고 사원증 없을경우
                //     setInitialRoute('BlankCardPage');
                // }
                /* else*/ if (userVC&&did) { //사원증(DID, VC) 있을 경우
                     setInitialRoute('CardPage');
                 }
                // setReady(true);
        }
        getUserInfo();
    }, [/*userVC, did*/]);

    const _loadData = async () => {
        try {
            const result = await AsyncStorage.getItem('tasks_vc') ;
                const jwt = JSON.parse(result);
                console.log(jwt);
    
                setUserVC(jwt.data.data.vc);
                setDid(jwt.data.data.identity.did); //did,privateKey
                
                
            //const value2 = await AsyncStorage.getItem('tasks_id');
            /*const value3 = await AsyncStorage.getItem('tasks_ficture')
            userF != null ? JSON.parse(jsonValue) : null;*/
            //const value3 = null;
            /*await AsyncStorage.getItem('tasks_ficture', (err, value) => {
                if (err == null) {
                
                const value3 = JSON.parse(value);
                console.log(value3.uri);
                const data = (value3.uri).toString();
                console.log(data);
                setUserFicture(data);
                console.log(userFicture);
                }
            });/*
                if(value3 !== null) {
                    //value3 = toString(`${JSON.parse(value3)}`);
                    console.log(value3.uri);
                    const a1 = JSON.stringify(value3.uri);
                    
                    console.log(a1+"이거");
                    
                    const a2 = JSON.parse(a1);
                    
                    console.log(a2);
                } else console.log(err); 
                
            });*/
            
        
            /*if (value !== null) {
                setUserVC(value);
                console.log(value);
            };*/
            
            /*if(value3 !== null) {
                //value3 = toString(`${JSON.parse(value3)}`);
                //setUserFicture(value3);
                console.log(userFicture);
            };*/
        } catch (err) {
            console.error(err);
        };
    };

    if (!isReady) return (
        <AppLoading
            startAsync={_loadData}
            onFinish={() => setReady(true)}
            onError={console.error}
        />
    )
    else
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <StatusBar></StatusBar>
                    <Navigation initialRoute={initialRoute} 
                                userVC={userVC} 
                                did={did}
                                //userFicture={userFicture}
                    />
                </Container>
            </ThemeProvider>
        );
};

export default App;