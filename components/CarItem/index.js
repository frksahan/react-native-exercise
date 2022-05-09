import React from 'react';
import { View, Text, ImageBackground, } from 'react-native';
import styles from './styles';


const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={require('../../assets/images/tofask.jpg')}
                style={styles.image}
            />

            <View style={styles.titles} >
                <Text style={styles.textHeader} >Şahin S</Text>
                <Text style={styles.text} >15.000'den başlayan fiyatlarla...</Text>
            </View>
        </View>
    );
};

export default CarItem;