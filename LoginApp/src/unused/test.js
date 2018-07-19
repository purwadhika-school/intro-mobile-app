import React, { Component } from "react";
import { View, Text } from "react-native";

class Test extends Component {
  render() {
    return (
      <Text>
        Ini komponen testjs: {this.props.cobaData} - {this.props.kota}
      </Text>
    );
  }
}

export default Test;
