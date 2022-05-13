import React from 'react';
import { View, Text, ImageBackground, } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => {

    const { name, tagline, image } = props;

    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles} >
                <Text style={styles.textHeader}>{name}</Text>

                <View style={styles.text1}>
                    <Text style={styles.text}>{tagline}</Text>
                </View>

            </View>

            <View style={styles.buttonsContainer}>
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