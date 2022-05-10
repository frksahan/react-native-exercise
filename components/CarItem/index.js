import React from 'react';
import { View, Text, ImageBackground, } from 'react-native';
import StyledButton from "../StyledButton";
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

                <View style={styles.text1}>
                    <Text style={styles.text}>15.000'den başlayan fiyatlarla...</Text>
                </View>

            </View>

            <View style={styles.margin}>
                <StyledButton
                    type="primary"
                    content={"Müşteri Velinimet:)"}
                    onPress={() => {
                        console.warn("Müşterimiz tuşa bastı");
                    }}
                />

                <StyledButton
                    type="secondary"
                    content={"Siz Zaten Müşterimizsiniz:)"}
                    onPress={() => {
                        console.warn("Sizi de müşterimiz olarak görmek isteriz...");
                    }}
                />
            </View>
        </View>
    );
};

export default CarItem;