import React, { Component } from 'react';
import { addOneToCounter, subOneToCounter } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends Component {
	constructor() {
		super();
	}

	incHandler(e) {
		this.props.addOneToCounter();
	}

	decHandler(e) {
		this.props.subOneToCounter();
	}

	render() {
		return (
			<div className="app">
				<h2> Counter redux</h2>
				<button
					className="btn btn-primary"
					style={{ marginRight: '20px' }}
					onClick={this.incHandler.bind(this)}
				>
					Add +
				</button>
				<button className="btn btn-danger" onClick={this.decHandler.bind(this)}>
					Subtract -
				</button>
				<h2>Value: {this.props.counter} </h2>
			</div>
		);
	}
}

function mapStateToProps({ counter }) {
	return {
		counter
	};
}

export default connect(mapStateToProps, { addOneToCounter, subOneToCounter })(
	App
);
