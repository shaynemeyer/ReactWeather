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
				<form onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" ref="location" placeholder="Search weather by city"/>
					<button type="submit" className="button expanded hollow">Get Weather</button>
				</form>
			</div>

		);
	}
}
