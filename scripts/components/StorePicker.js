/*

	Store Picker
	This will let us make <StorePicker/> 

*/

import React from 'react';
import { Navigation } from 'react-router';
import h from '../helpers';

var StorePicker = React.createClass({
	mixins:[Navigation],
	goToStore: function(event) {
		event.preventDefault();
		//get the data from the input
		var storeId = this.refs.storeId.value;
		//transition fron <StorePicker/> to <App/>
		this.history.pushState(null, '/store/'+ storeId);
	},
	render: function() {
		// Normal comments
		return (
			<form className = "store-selector" onSubmit={this.goToStore}>
				{/* Comments go here!*/}
				<h2>Please enter a Store</h2>
				<input type="text" ref="storeId" defaultValue ={h.getFunName()} required/>
				<input type="submit"/>
			</form>
		)
	}
});

export default StorePicker;
