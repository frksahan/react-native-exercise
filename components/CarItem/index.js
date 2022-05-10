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


            <StyledButton
                type="primary"
                content={"Custom Order"}
                onPress={() => {
                    console.warn("Custom Order was pressed");
                }}
            />

            <StyledButton
                type="secondary"
                content={"Existing Inventory"}
                onPress={() => {
                    console.warn("Existing Inventory was pressed");
                }}
            />
        </View>
    );
};

export default CarItem;