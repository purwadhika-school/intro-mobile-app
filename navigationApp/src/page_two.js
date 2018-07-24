import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class PageTwo extends Component {
  // static navigationOptions = {
  //     headerTitle: 'Page Dua'
  // }

  render() {
    return (
      <View>
        <Text>This is the second page!</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.button}
        >
          <Text style={styles.text}>Back to first page</Text>
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
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    margin: 5,
    textAlign: "center"
  }
});

export default PageTwo;
