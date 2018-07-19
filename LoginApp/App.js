import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.containerLogo}>
          <Image style={style.logo} source={require("./img/logo.png")} />
        </View>
        <View style={style.containerTxtInput}>
          <TextInput placeholder="Email" underlineColorAndroid="black" />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            underlineColorAndroid="black"
          />
        </View>
        <View style={style.containerBtn}>
          <TouchableOpacity style={style.buttonLogin}>
            <Text style={style.txtInsideBtnLogin}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.buttonLogin, { marginTop: 10 }]}>
            <Text style={style.txtInsideBtnLogin}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  buttonLogin: {
    borderRadius: 22,
    backgroundColor: "black"
  },
  txtInsideBtnLogin: {
    color: "white",
    fontSize: 18,
    fontWeight: "400",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center"
  },
  logo: {
    marginTop: 100,
    alignSelf: "center",
    width: "70%",
    height: "70%"
  },
  containerTxtInput: { flex: 1, width: "75%", alignSelf: "center" },
  containerBtn: { flex: 1, width: "75%", alignSelf: "center" },
  container: { flex: 1 },
  containerLogo: { flex: 2 }
});

export default App;
