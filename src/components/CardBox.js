import React, { useState } from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import face from '../../assets/images/face.png';
import { theme } from '../colors/Theme';

const CardBox = (props) => {
    const did = props.did.substring(0, 20);
    const name = props.name;
    const company = props.company;
    const location = props.location;
    const uid = props.uid
    //const image = props.source.localUri;
    const [frontCard, setFrontCard] = useState(true);
    const [ficture, setFicture] = useState(face);
    
    
    /*if(!image) {
        setFicture(image);
    }*/

    return frontCard ? (
        <TouchableOpacity style={styles.box}
            onPress={() => setFrontCard(false)}
        >
            <View style={styles.viewBox}>
                <Text style={{ fontSize: 20, color: theme.mono900 }}>
                    모바일 사원증
            </Text>
            </View>
            <View style={styles.viewBox}>
                <Image source={ficture}
                    style={{
                        width: 100, height: 100,
                        
                    }}
                />
                </View>
                <View style={styles.viewBox}>
                <Text style={{ fontSize: 20, color: theme.mono900 }}>
                    {`${name}`}
                </Text>
            </View>
            <View style={styles.bottomBox} />
        </TouchableOpacity>
    ) : (
        <TouchableOpacity style={styles.box}
            onPress={() => setFrontCard(true)}
        >
            <View style={styles.viewBox}>
                <Text style={{
                    fontSize: 20, color: theme.mono900, marginBottom: 40
                }}>
                    모바일 사원증
                    {'\n'}{'\n'}
                    이름 : {name} {'\n'}
                    아이디 : {uid} {'\n'}
                    회사명 : {company} {'\n'}
                    회사지점 : {location} {'\n'}
                    {did}...
                </Text>
            </View>
            <View style={styles.bottomBox} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    box: {
        backgroundColor: theme.mono100,
        width: 270,
        height: 390,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: theme.mono900,
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
            },
            android: {
                elevation: 15,
            },
        }),
    },
    bottomBox: {
        backgroundColor: theme.blue400,
        width: 270,
        height: 46,
    },
    viewBox: {
        flex: 1, 
        alignContent: 'center', 
        justifyContent: 'center',
    },
});

export default CardBox;