import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import Slider from "@react-native-community/slider";
import Modal from "../src/components/Modal"

let charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$"

export default function Index() {
const [size, setSize] = useState<any>(10)
const [passwordValue, setPasswordValue] = useState<any>("")
const [modalVisible, setModalVisible] = useState(false)


function generatePassword() {
  let password = ""
  for(let i = 0, n = charset.length; i < size; i++){
    password += charset.charAt(Math.floor(Math.random() * n))
  }

  setPasswordValue(password)
  setModalVisible(true)
}

  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/images/react-logo.png")}
        style={styles.logo}
      />

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

      <Modal />

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center",
    alignItems: "center",
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
    fontSize: 30,
    fontWeight: "bold"
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
    fontSize: 20,
  }
})