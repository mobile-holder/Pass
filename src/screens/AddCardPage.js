import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { theme } from '../colors/Theme';
import SearchInput from '../components/SearchInput';
import IssueButton from '../components/IssueButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDown from '../components/Dropdown-picker';

const Container = styled.View`
    flex : 1;
    align-items : center;
    background-color : ${theme.mono100};
    `;

const View = styled.View`
    flex : 1.5;
    align-items : center;
    `

const AddCardPage = ({ navigation, route }) => {
    const [uid, setUid] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');

    const _addTask = () => {
        alert(`입력 : ${uid}`);
    };

    const _handleTextChangeID = text => {
        setUid(text);
    };

    const _handleTextChangeCom = text => {
        setCompany(text);
    };

    const _handleTextChangeLo = text => {
        setLocation(text);
    };

    return (
        <Container>
            <View></View>
            <View>
                <SearchInput
                    placeholder="회사명"
                    value={company}
                    onChangeText={_handleTextChangeCom}
                    //onSubmitEditing={_addTask}
                />
                <SearchInput
                    placeholder="지점"
                    value={location}
                    onChangeText={_handleTextChangeLo}
                    //onSubmitEditing={_addTask}
                />
                <SearchInput
                    placeholder="사원 ID"
                    value={uid}
                    onChangeText={_handleTextChangeID}
                    onSubmitEditing={_addTask}
                />
            </View>
            <View style={{ justifyContent: 'center' }}>
                <IssueButton
                    title='발급하기'
                    uid={uid}
                    company={company}
                    location={location}

                    //userDID={userDID}
                    onPress={(did,userVC) => navigation.reset({
                        routes: [{
                            name: 'CompleteAddCardPage',
                            params: { did: did, userVC : userVC
                            },
                        }]
                    })
                    }
                >
                </IssueButton>
            </View>
        </Container>
    );
};

export default AddCardPage;