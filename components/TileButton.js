import React from 'react';
import { Text } from 'react-native';
import {Tile} from 'react-native-elements'

export default class TileButton extends React.Component {
	render() {
		return (
			<Tile
				imageSrc={{require: ('../assets/images/robot-prod.png')}}
				featured
				{...this.props}
			/>
		);
	}
}