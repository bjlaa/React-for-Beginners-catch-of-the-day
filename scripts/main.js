var React = require('react');
var ReactDOM = require('react-dom');
/*

	Store Picker
	This will let us make <StorePicker/> 

*/

var StorePicker = React.createClass({
	render: function() {
		// Normal comments
		return (
			<form className = "store-selector">
				{/* Comments go here!*/}
				<h2>Please enter a Store</h2>
				<input type="text" ref="storedId" required/>
				<input type="submit"/>
			</form>
		)
	}
});


ReactDOM.render(<StorePicker/>, document.querySelector('#main')); 


