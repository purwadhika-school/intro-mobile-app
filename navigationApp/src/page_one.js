import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

class PageOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailUser: "",
      passwordUser: ""
    };
  }

  static navigationOptions = {
    headerTitle: "Page Satu"
  };

  checkUserInput() {
    const { emailUser, passwordUser } = this.state; // Destructuring

    if (emailUser === "yogie.putra8@gmail.com" && passwordUser === "123456") {
      this.props.navigation.navigate("PageDua", {
        email_user: emailUser
      });
    }
  }

  render() {
    return (
      <View>
        <View style={styles.txtContainer}>
          <TextInput
            onChangeText={txt => this.setState({ emailUser: txt })}
            style={styles.emailTxt}
            placeholder="Email"
          />
          <TextInput
            onChangeText={txt => this.setState({ passwordUser: txt })}
            style={styles.passwordTxt}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.checkUserInput()}
          style={styles.button}
        >
          <Text style={styles.text}>Go to second page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "#779ecb",
    width: "80%",
    alignSelf: "center",
    borderRadius: 7
  },
  passwordTxt: {
    backgroundColor: "yellow",
    marginTop: 10,
    borderRadius: 8
  },
  txtContainer: { width: "70%", alignSelf: "center", marginTop: 50 },
  emailTxt: { backgroundColor: "yellow", borderRadius: 8 },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    margin: 5,
    textAlign: "center"
  }
});

export default PageOne;
