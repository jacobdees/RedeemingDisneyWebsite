import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./Main";
console.disableYellowBox = true;

export default function App() {
	return (
		<View style={styles.container}>
			<Main />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#123",
		alignItems: "center",
		justifyContent: "center",
	},
});
