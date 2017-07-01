var React = require('react');
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import {getTemp} from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

export default class Weather extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading:false
		}
	}

	handleSearch(location) {
		var that = this;

		this.setState({
			isLoading: true,
			errorMessage: undefined
		})

		getTemp(location).then(function(temp){
			that.setState({
				isLoading: false,
				location: location,
				temp: temp
			})
		}, function(e) {
			that.setState({
				isLoading: false,
				errorMessage: e.message
			})
		})
	}
	render() {
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage() {
			if (isLoading) {
				return <h3 className="text-center">Fetching weather...</h3>;
			}	else if (temp && location) {
				return <WeatherMessage temp={temp} location={location} />;
			}
		}
		
		function renderError() {
			if(typeof errorMessage === 'string') {
				return (
					<ErrorModal/>
				)
			}
    }

		return (
			<div>
				<WeatherForm onSearch={this.handleSearch.bind(this)} />
				{renderMessage()}
				{renderError()}
			</div>
		);
	}
}