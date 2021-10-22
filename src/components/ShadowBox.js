import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Platform, Image } from 'react-native';
import { theme } from '../colors/Theme';
import plus_x64 from '../../assets/images/plus_x64.png';

export default class ShadowBox extends Component {

    static defaultProps = {
        //title: 'untitled',
        titleColor: '#fff',
        onPress: () => null,
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <TouchableOpacity style={styles.box}
            onPress={this.props.onPress}
        >
            <Image source={plus_x64}
                style={{ width: 64, height: 67 }} />
        </TouchableOpacity>

        /*this.props.title != null ? (
                <TouchableOpacity style={styles.box}
                    onPress={this.props.onPress}
                >
                    <Image source = {plus_x64}
                        style={{ width: 64, height: 67 }} />
                </TouchableOpacity>
        ) : (
                <></>
                /*<Image source = {plus_x64}
                        style={{ width: 64, height: 67 }} />*/
        //);
    };
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
                elevation: 13,
            },
        }),
    },
});