import React, { Component } from "react";
import ReactDOM from "react-dom";
import reactMonitor from "reactmonitorfiber";

import Form from "./components/Form";

class Container0 extends Component {

	constructor() {
		super();
	
/*
		this.state = {
			value: ""
		};
		this.handleChange = this.handleChange.bind(this);
*/
	}
	
	render() {
		return <Form />;
	}
}

export default Container0;
const wrapper = document.getElementById( "container" );
wrapper ? ReactDOM.render( <Container0 />, wrapper ) : false;
reactMonitor( wrapper );
