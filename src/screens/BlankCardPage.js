import React from 'react';
import styled from 'styled-components/native';
import ShadowBox from '../components/ShadowBox';
import QrButton from '../components/QrButton';
import Header from '../components/headers/Header';
import { theme } from '../colors/Theme';
import BackAlert from '../components/BackAlert';

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

    const BlankCardPage = ({ navigation, route, props }) => {
        //const userVC = route.params.userVC;
        //const userID = route.params.userID;
    
        BackAlert(" ");

        return (
            <Container>
                <Header nonMenu='nonMenu'/>
                <View>
                    <ShadowBox
                        //title={userVC}
                        onPress={() => navigation.push('AddCardPage')}
                    >
                    </ShadowBox>
                </View>
                <View>
                    <QrButton
                        title={'QR 생성'}
                    >
                    </QrButton>
                </View>
            </Container>
        );
    };
    
    export default BlankCardPage;