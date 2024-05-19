import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from "react-native";


export default function Modal ({passwordValue} : {passwordValue:any}) {

    return(
        <View>
            <Text>{passwordValue}</Text>
        </View>
    );
}
