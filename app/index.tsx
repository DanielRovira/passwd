import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';
import Slider from "@react-native-community/slider";
import Modal from "../src/components/Modal";

let charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$"

export default function Index() {
const [size, setSize] = useState<any>(12)
const [passwordValue, setPasswordValue] = useState<any>(" ")
const [showPopup, setShowPopup] = useState(false)

const copyToClipboard = async (value:string) => {
    await Clipboard.setStringAsync(value);
  };

function generatePassword() {
  let password: string = ""
  for(let i = 0, n = charset.length; i < size; i++){
    password += charset.charAt(Math.floor(Math.random() * n))
  }

  setPasswordValue(password)
  copyToClipboard(password)
  setShowPopup(true)
  setTimeout(() => {
    setShowPopup(false);
  }, 3000);
}

  return (
    <View style={styles.container}>
        <View style={[styles.popup, {display: showPopup ? "flex" : "none" }]} >
            <Text style={styles.popupText}>Copiado!</Text>
        </View>

      <Image 
        source={require("../assets/images/react-logo.png")}
        style={styles.logo}
      />

      <Text selectable style={[styles.title, styles.password]}>{passwordValue}</Text>

      <Text style={styles.title} >{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          // maximumTrackTintColor="#ff0000"
          // minimumTrackTintColor="#000"
          // thumbTintColor="#392de9"
          step={1}
          value={size}
          onValueChange={ (value) => setSize(value) }
        />
      </View>

      <Pressable style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center"
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginBottom: 14,
    marginTop: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6
  },
  title:{
    fontSize: 25,
    fontWeight: "500"
  },
  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20
  },
  password:{
    fontSize: 30,
    marginVertical: 50,
    fontWeight: "bold"
  },
  popup:{
    position: 'absolute',
    top: 80,
    backgroundColor: "rgba(25,25,25,0.5)",
    borderRadius: 5,
    padding: 10
  },
  popupText:{
  color:'#FFF',
  fontSize: 18
}
})