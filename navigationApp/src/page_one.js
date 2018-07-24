import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class PageOne extends Component {
  static navigationOptions = {
    headerTitle: "Page Satu"
  };

  render() {
    return (
      <View>
        <Text>This is the first page!</Text>
        <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('PageDua')}
            style={styles.button}>
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
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    margin: 5,
    textAlign: "center"
  }
});

export default PageOne;
