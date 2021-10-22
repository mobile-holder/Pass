import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import CardBox from '../components/CardBox';
import QrButton from '../components/QrButton';
import Header from '../components/headers/Header';
import { theme } from '../colors/Theme';
import { decodeJWT } from 'did-jwt';

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

const CardPage = ({ navigation, route, props }) => {
    const did = route.params.did;
    const userVC = route.params.userVC;
    //const did = `${uid}`;
    //const VC = `${userVC}`;
    //console.log(did)
    //console.log(userVC);
    const [userInfo, setUserInfo] = useState({});

    const userFicture = route.params.userFicture;
    //const [ficture, setFicture] = useState(undefined);
    //console.log(userFicture);
   

    useEffect(() => {
        const decodedInfo = decodeJWT(`${userVC}`).payload.vc.credentialSubject;
        console.log(decodedInfo);
        setUserInfo(decodedInfo);
    },[]);



    return (
        <Container>
            <Header
                //onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} 
                onPress={() => navigation.navigate("menuDrawer")}
            />
            <View>
                <CardBox
                    name={`${userInfo.name}`}
                    uid={`${userInfo.uid}`}
                    company={`${userInfo.company}`}
                    location={`${userInfo.location}`}
                    did={`${did}`}
                    
                    //source={{uri:ficture}}
                //onPress={() => navigation.navigate('AddCardPage', {userName:`${userName}`})}
                >
                </CardBox>
            </View>
            <View>
                <QrButton
                    title={'QR 생성'}
                    did={did}
                    userVC={userVC}
                    //userDID={userDID}
                    onPress={() => navigation.navigate('QRPage', { did: `${did}`, userVC: userVC })}
                >
                </QrButton>
            </View>
        </Container>
    );
};

export default CardPage;