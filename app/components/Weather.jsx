var React = require('react');
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import {getTemp} from 'openWeatherMap';

export default class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading:false
		}
	}

	handleSearch(location) {
		var that = this;

		this.setState({ isLoading: true })

		getTemp(location).then(function(temp){
			that.setState({
				isLoading: false,
				location: location,
				temp: temp
			})
		}, function(errorMessage) {
			alert(errorMessage);
		})
	}
	render() {
		var {isLoading, temp, location} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			}	else if (temp && location) {
				return <WeatherMessage temp={temp} location={location} />;
			}
		}

		return (
			<div>
				<WeatherForm onSearch={this.handleSearch.bind(this)} />
				{renderMessage()}
			</div>
		);
	}
}