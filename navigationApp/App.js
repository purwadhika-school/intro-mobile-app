import React, { Component } from "react";
import { View } from "react-native";
import PageOne from "./src/page_one";
import PageTwo from "./src/page_two";
import { createStackNavigator } from "react-navigation";

const RootStack = createStackNavigator(
  {
    PageSatu: PageOne,
    PageDua: PageTwo
  },
  {
    initialRouteName: "PageSatu"
  }
);

export default RootStack;
