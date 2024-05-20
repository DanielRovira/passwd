import { StyleSheet, Text, View } from "react-native";


export default function Modal () {

    return(
        <View style={modalStyles.container}>
            <Text>Copiado!</Text>
        </View>
    );
}

const modalStyles = StyleSheet.create({
    container:{
        backgroundColor: "#000000"
    }
})
