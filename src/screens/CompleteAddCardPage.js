import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import ShadowButton from '../components/ShadowButton';
import { theme } from '../colors/Theme';
import Header from '../components/headers/Header';
import BackAlert from '../components/BackAlert';
import { decodeJWT } from 'did-jwt';

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${theme.mono100};
    `;

const View = styled.View`
    flex : 1.5;
    justify-content : center;
    align-items : center;
    `;

const CompleteAddCardPage = ({ navigation, route }) => {
    const [userInfo, setUserInfo] = useState({});
    const did = route.params.did;
    const userVC = route.params.userVC;
    const did2 = did.substring(0, 26);
    const did3 = did.substring(26);

    useEffect(() => {
        const decodedInfo = decodeJWT(userVC).payload.vc.credentialSubject;
        console.log(decodedInfo);
        setUserInfo(decodedInfo);
    }, []);


    BackAlert("사원 출입증 생성완료");

    return <Container>
        <Header nonMenu='nonMenu' />
        <View>
            <Text style={{ fontSize: 20, color: theme.mono800 }}>
                정상적으로 발급되었습니다.{`\n\n`}
                이름: {`${userInfo.name}\n`}
                사원 ID: {`${userInfo.uid}\n`}
                회사명: {`${userInfo.company}\n`}
                회사지점: {`${userInfo.location}\n`}
                {`${did2}\n${did3}\n`}
            </Text>
        </View>
        <View>
            <ShadowButton
                title="확인"
                onPress={() => navigation.reset({
                    routes: [{
                        name: 'CardPage',
                        params: { did: did, userVC : userVC
                        },
                    }]
                })}
            />
        </View>
    </Container>
};

export default CompleteAddCardPage;