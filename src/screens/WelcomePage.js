import React from 'react';
import styled from 'styled-components/native';
import { Image, Text } from 'react-native';
import logo from '../../assets/images/logo.png';
import ShadowButton from '../components/ShadowButton';
import { theme } from '../colors/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${theme.mono100};
    `;

const View = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    `;

const WelcomePage = ({ navigation }) => {
    AsyncStorage.clear();
    return (
        <Container>
                <Image source={logo} style={{ width: 240, height: 240, marginTop: 55, marginBottom: 30 }} />
            <View>
                <Text style={{ fontSize: 30, color: theme.mono800 }} >
                    {'  '}공유오피스 전용 {'\n'}
                    DID 모바일 사원증
                    </Text>
            </View>
            <View>
                <ShadowButton
                    title={'시작하기'}
                    onPress={() => navigation.reset({routes: [{name:'BlankCardPage'}]})} 
                >
                </ShadowButton>
            </View>
        </Container>
    );
};

export default WelcomePage;
