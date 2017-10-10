import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements'

export default class Offers extends React.Component {
	static navigationOptions = {
		title: 'Offers',
	};

	render() {

		const list = [
			{
				title: 'Appointments',
				icon: 'av-timer'
			},
			{
				title: 'Trips',
				icon: 'flight-takeoff'
			},
		];


		return (
			<List>
				{
					list.map((item, i) => (
						<ListItem
							key={i}
							title={item.title}
							leftIcon={{name: item.icon}}
						/>
					))
				}
			</List>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		backgroundColor: '#fff',
	},
});
