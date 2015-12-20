var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;

/*

	App

*/
var App = React.createClass({
	render: function(){
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market"/>
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
			<header className="top">
				<h1>Catch 
					<span>
						<span className="of">of</span>
						<span className="the">the</span>
					</span>
				Day</h1>
				<h3 className="tagline"><span>{this.props.tagline}</span></h3>
			</header>
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

/*

	Route

*/

var routes = (
	<Router>
		<Route path="/" component={StorePicker}/>
		<Route path="/store/:storedId" component={App}/>
	</Router>
)

ReactDOM.render(<App/>, document.querySelector('#main')); 


