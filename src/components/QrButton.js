import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, Platform, View } from 'react-native';
import { theme } from '../colors/Theme';

export default class QrButton extends Component {

    static defaultProps = {
        title: 'untitled',
        titleColor: '#fff',
        backgroundColor: theme.blue900,
        onPress: () => null,
        did: undefined,
    }

    constructor(props) {
        super(props);
    }

    activeQr (props) {
        userID = props.userID;
        return userID;
    };
    
    render() {
        return this.props.did ? (
            <TouchableOpacity 
                style={[styles.button, 
                    {activeOpacity: 0.4}]}
                onPress={this.props.onPress}
            >
                <Text style={[
                    styles.title,
                    { color: this.props.titleColor }]}
                >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        ) : (
            <View 
                style={[styles.button, 
                { backgroundColor:theme.blue300 }, {activeOpacity: 0.4}]}
            >
                <Text style={[
                    styles.title,
                    { color: this.props.titleColor }
                ]}>{this.props.title}</Text> 
            </View>
        );
    };
};


const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 40,
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.blue900,
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
        fontWeight: 'bold',
    }
});