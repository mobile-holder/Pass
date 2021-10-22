import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, Platform } from 'react-native';
import { theme } from '../colors/Theme';

export default class ShadowButton extends Component {

    static defaultProps = {
        title: 'untitled',
        titleColor: '#fff',
        onPress: () => null,
    }

    constructor(props) {
        super(props);
    }

    render( ) {
        return  (
            <TouchableOpacity style={styles.button}
                onPress={this.props.onPress}
            >
                <Text style={[
                    styles.title,
                    { color: this.props.titleColor }
                ]}>{this.props.title} </Text>
            </TouchableOpacity>
        );
    };
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