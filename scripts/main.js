var React = require('react');
var ReactDOM = require('react-dom');
/*

	App

*/
var App = React.createClass({
	render: function(){
		return (
			<div className="catch-of-the-day">
				<div class="menu">
					<Header/>
				</div>
				<Order/>
				<Inventory/>
			</div>
		)
	}
});

/*

	Header
	<Header/>

*/
var Header = React.createClass({
	render: function(){
		return (
			<p>Header</p>
		)
	}

});

/*

	Order
	<Order/>

*/
var Order = React.createClass({
	render: function(){
		return (
			<p>Order</p>
		)
	}

});

/*

	Inventory
	<Inventory/>

*/
var Inventory = React.createClass({
	render: function(){
		return (
			<p>Inventory</p>
		)
	}

});

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


ReactDOM.render(<App/>, document.querySelector('#main')); 


