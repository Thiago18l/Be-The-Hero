import React from 'react';
import { View, Image, Text } from 'react-native';


//logos
import LogoImg from '../../assets/logo.png'
// style
import style from './style';

export default function Incidents(){
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={LogoImg} />
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold}>0 Casos</Text>.
                </Text>
            </View>
        </View>
    )
}