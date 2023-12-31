import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <SafeAreaView/>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>App</Text>
        <Text style={styles.titleText}>Estelar</Text>
      </View>
        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Nave Espacial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Mapa Estelar</Text>
        </TouchableOpacity>
         
        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Images Diárias</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  droidSafeArea: {
    marginTop: Platform.Os === "android" ? StatusBar.currentHeight: 0
  },

  routeCard: {
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 100,
    backgroundColor: "white"
  },

  titleBar: {
    flex: 0.5, 
    justifyContent: "center",
    alignItems: "center"
  },

  titleText: {
    fontsize: 30,
    fontWeight: "bold",
    color: "white"
  },

  routeText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#D11583",
    justifyContent: "center",
    alignItems: "center"
  }
})