import React, { Component } from 'react';

//===========IMPORT RESOURCES AND COMPONENTS
import articles from '../resources/articles.json';

//===========LIST SCREEN
class ListScreen extends Component {
	constructor(props) {
		super(props);

		//-------------BIND METHODS TO THIS
		this.navigateToDetail = this.navigateToDetail.bind(this);
	}

	navigateToDetail(item){
		this.props.navigation.navigate('Detail', {
			item: item,
		})
	}

	
	render() {
	    return (
	    	<List items={ articles } navigateToDetail={ this.navigateToDetail }/>
	    );
	}
}


//===========HEADER BAR
ListScreen.navigationOptions = {
  title: 'BBC News',
};

export default ListScreen;