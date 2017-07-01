var React = require('react');

export default class WeatherForm extends React.Component {
	onFormSubmit(e) {
		e.preventDefault();

		var location = this.refs.location.value;

		if (location.length > 0) {
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	}
	render() {
		return (
			<div>
				<h1 className="text-center">Get Weather</h1>
				<form onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" ref="location"/>
					<button type="submit" className="button expanded hollow">Get Weather</button>
				</form>
			</div>

		);
	}
}
