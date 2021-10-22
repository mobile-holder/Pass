import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, Platform } from 'react-native';
import { theme } from '../colors/Theme';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IssueButton = ({onPress, onChangeRes, ...props}) => {
    const title = props.title;
    const titleColor = '#fff';
    const uid = props.uid;
    const company = props.company;
    const location = props.location;
    const [exist, setExist] = useState(false);
    const [save, setSave] = useState(false);
    const [did, setDid] = useState();
    const [userVC, setUserVC] = useState('');

    
    const _saveData = async (value) => {
        try {
            //setVc(value[1]);
            //setIdentity(value[2]);
            
            await AsyncStorage.setItem('tasks_vc', JSON.stringify(value), () => {
                
            });
            setSave(true);
                setDid(value.data.data.identity.did);
                setUserVC(value.data.data.vc);
        } catch (e) {
            //setExist(false);
            
            console.error(e);
        };
    };
    //http:localhost:3000/issue/employee/
    //getUserDBInfo() 를 통해 value에 대한 데이터가 맞는지
    const createVC=(() => {
        axios.post('http://localhost:3000/issue/employee',{
                uid : uid,
                company : company,
                location : location,
        })
        .then(function (response) {
            _saveData(response);
            console.log(response);
            console.log(did);
            /*try {
                const result = AsyncStorage.getItem('tasks_vc') ;
                    const jwt = JSON.parse(result);
                    console.log(jwt);
        
                    setUserVC(jwt.data.data.vc);
                    setDid(jwt.data.data.identity.did);
                    
                } catch (err) {
                    console.error(err);
                };
        
            /*jwt = JSON.stringify(`${response}`);
            console.log(jwt);

            setUserVC(jwt.data.data.vc);
            setDid(jwt.data.data.identity.did);
            console.log(did);*/
        })
        .catch(function (err) {
            setSave(false);
            console.log(err);
            
        });
    });

    useEffect(() => {
        if(exist) {
            if(!uid) {
                setExist(false); // 처음 진입해서 id 입력 안할시
            };// 처음 진입해서 id 입력시
        } else {
            if(uid) { //지우고 다시 쓸때
                setExist(true);
            } else setExist(false); // 안쓴다면
        };
        if(exist) {
            createVC();
        }
    },[uid]);

    return exist&&save ? (
        <TouchableOpacity style={styles.button}
                onPress = {() => { onPress(did, userVC); /*console.log(did); console.log();*/}} 
            >
                <Text style={[
                    styles.title,
                    { color: titleColor }
                ]}>{title} </Text>
            </TouchableOpacity>
    ) : (
        <TouchableOpacity style={styles.button}
                onPress = {() => alert("다시 확인해주세요")}
            >
                <Text style={[
                    styles.title,
                    { color: titleColor }
                ]}>{title} </Text>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.blue900,
        width: 245,
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: theme.mono800,
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
            },
            android: {
                elevation: 12,
            },
        }),
    },
    title: {
        fontSize: 30,
    },
});

export default IssueButton;