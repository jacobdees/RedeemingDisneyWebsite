import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import { CONTACTS } from "./contacts";
import { ListItem, Card } from "react-native-elements";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: CONTACTS,
		};
	}

	render() {
		const renderInfoCard = ({ item }) => {
			return <ListItem title={item.firstName} subtitle={item.department} />;
		};
		return (
			<FlatList
				data={this.state.contacts}
				renderItem={renderInfoCard}
				keyExtractor={(item) => item.id.toString()}
			/>
		);
	}
}

export default Main;
