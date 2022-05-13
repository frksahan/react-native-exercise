import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    },

    titles: {
        marginTop: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textHeader: {
        fontSize: 70,
        fontWeight: '500',
        color: '#14213d',
    },

    text1: {
        backgroundColor: '#fff',
        borderRadius: 15,
        width: '80%',
        borderStyle: 'solid',
        color: 'black',
        borderWidth: 5,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 20,
        color: '#00bbf9',
        fontWeight: 'bold',

    },
    subtitleCTA: {
        textDecorationLine: 'underline',
        fontSize: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },

});


export default styles;