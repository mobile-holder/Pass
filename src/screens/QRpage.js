import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Header from '../components/headers/Header';
import { theme } from '../colors/Theme';
import QRCode from 'react-native-qrcode-svg';
import ShadowButton from '../components/ShadowButton';
import Timer from '../components/Timer';

const Container = styled.View`
    flex : 1;
    align-items : center;
    background-color : ${theme.mono100};
    `;

const View = styled.View`
    flex : 1.5;
    justify-content : center;
    align-items : center;
    `;

const QRPage = ({ navigation, route }) => {
    const did = route.params.did;
    const userVC = route.params.userVC;

    return (
        <Container>
            <Header/>
                <Timer navigation={navigation}/>
                <View>
                <QRCode
                    value={`${did}`}
                    
                    size={200}
                >       
                </QRCode>
            
            </View>
            <View>
            <ShadowButton title="확인" 
                       onPress={() => { navigation.pop(); }} 
                >
                </ShadowButton>
            </View>
        </Container>
    );
};

export default QRPage;