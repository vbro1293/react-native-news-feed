import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

//=================IMPORT CUSTOM COMPONENTS
// import DetailInfo from '../components/DetailInfo';
// import DetailShowtimes from '../components/DetailShowtimes';
// import DetailSynopsis from '../components/DetailSynopsis';
// import HeaderRightIcon from '../components/HeaderRightIcon';


class DetailScreen extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
		// const { synopsis, year, tmdbRating, tmdbImageId, showtimes } = this.props.navigation.state.params.item;
		// const imageSource = { uri: "https://image.tmdb.org/t/p/original/" + tmdbImageId + ".jpg" };

		return (
		// 	<ScrollView style={ styles.container }>
		// 		<Image source={ imageSource } style={ styles.image } />
		// 		<DetailInfo year={ year } rating={ tmdbRating }/>
		// 		<DetailShowtimes showtimes={ showtimes }/>
		// 		<DetailSynopsis synopsis={ synopsis }/>
		// 	</ScrollView>
		);
	}
}

//==================STYLES
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 5,
	},
	// image: {
	// 	width: 300,
	// 	height: 400,
	// 	alignSelf: 'center',
	// 	marginBottom: 5,
	// },
});

//===========HEADER BAR
DetailScreen.navigationOptions = ({ navigation }) => ({
	title: "Detail", 
	// navigation.state.params.item.name,
	// headerRight: (<HeaderRightIcon url={ navigation.state.params.item.imdbUrl } />)
});

export default DetailScreen;