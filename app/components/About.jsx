var React = require('react');

export default function About(props) {
		return (
			<div>
				<h1 className="text-center page-title">About</h1>
				<p>This is a weather application built with ReactJS.</p>
				<p>
					Here are some of the tools I used:
				</p>
				<ul>
					<li>
						<a href="https://facebook.github.io/react">React</a> - This was the JavaScript Library used.
					</li>
					<li>
						<a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
					</li>
				</ul>
			</div>
		)
}
