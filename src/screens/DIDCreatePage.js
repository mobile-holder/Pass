import React from 'react';
import styled from 'styled-components/native';
import { Image, Text } from 'react-native';
import dreamPass_x64 from '../../assets/images/dreamPass_x64.png';
import ShadowButton from '../components/ShadowButton';
import { theme } from '../colors/Theme';
import { useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackAlert from '../components/BackAlert';


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
    margin-top : 100px;
    `;

const Header = styled.View`
    width: ${({ width }) => width - 20}px;
`;

const InputHeader = () => {
    const width = useWindowDimensions().width;

    return (
        <Header width={width}>
            <Image source={dreamPass_x64}
                style={{ width: 64, height: 67, marginTop: 10 }} />
        </Header>
    );
};

const DIDCreatePage = ({ navigation, route }) => {
    const userDID = //route.params.userDID;
        'ethr:zxufsn1v3';

    const _saveData = async (value) => {
        try {
            await AsyncStorage.setItem('tasks_did', value);
        } catch (e) {
            console.error(e);
        };
    };

    _saveData(userDID); // DID 저장

    BackAlert("DID 생성완료"); // 뒤로가기 방지

    return (
        
        <Container>
            <InputHeader />
            <View>
                <Text style={{ fontSize: 20, color: theme.mono800 }}>
                    DID = {`${userDID}\n`}
                DID가 성공적으로 생성되었습니다.
            </Text>
            </View>
            <View>
                <ShadowButton
                    title="확인"
                    onPress={() => navigation.reset({routes: [{
                        name: 'BlankCardPage', 
                        params: { userDID: userDID },
                    }]})}
                />
            </View>
        </Container>
    );
};

export default DIDCreatePage;