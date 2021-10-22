import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { theme } from '../colors/Theme';
import {Picker} from '@react-native-picker/picker';
//import DropDownPicker from 'react-native-dropdown-picker';
import { color } from 'react-native-reanimated';


export default class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            company: null,
            location: [],
            length: null,
        };
    }

    changeArea(itemValue) {
        let company = null;
        let location;
        this.setState({
            company: itemValue
        });
        switch (itemValue) {
            case '' :
                location= [{label:'', value: ''}];
            break;
            case 'aib':
                location = [
                    {label: '서초점', value: 'seocho', id:1},
                    {label: '대구점', value: 'daegu', id:2}
                ];
                length = location.length;
                //console.log(length);
                //console.log(location[0].label);
            break;
            case 'labs':
                location = [
                    {label: '강남점', value: 'gangnam', id:3}
                ];
                length = location.length;
            break;
        }

        this.setState({
            company,
            location
        });
    }

    // DB 확인 작업
    /*changeCompany(itemValue) {
        this.setState({
            company: itemValue
        });
    }*/

    render() {

        return  (
            <View>
                <Picker
                    mode='dropdown'
                    style={styles.box}
                    //onChangeItem={(item) => this.changeArea(item)}
                    onValueChange={(itemValue) => this.changeArea(itemValue)}
                >
                    <Picker.Item label='회사를 선택해주세요' value='' />
                    <Picker.Item label='AI블록체인' value='aib'/>
                    <Picker.Item label='블록체인랩스' value='labs'/>
                    
                </Picker>
                
                <Picker
                    mode='dropdown'
                    default={this.state.location === null}
                    style={styles.box}
                    //onChangeItem={(itemValue) => this.changeCompany(itemValue)}
                >
                    <Picker.Item label="지점을 선택해주세요" />
                    {/*items={this.state.location*/}
                    {this.state.location.map((location) => (
                        <Picker.Item label={location.label.toString()} value={location.value.toString()} key={location.id.toString()} />
                    ))}
                </Picker>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    box: {
        fontSize: 18,
        fontWeight: "500",
        height: 54, 
        width: 220,
        borderWidth:3, 
        borderRadius:10, 
        marginBottom: 10,
        backgroundColor: theme.mono100,
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
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    }
});
