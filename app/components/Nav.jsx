var React = require('react');
var { IndexLink } = require('react-router');

class Nav extends React.Component {
	onSearch(e){
    e.preventDefault();
    alert('not yet wired up!');
	}

	render() {
    return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Weather App</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
						</li>
						<li>
							<IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
						</li>
						<li>
							<IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<form action="" onSubmit={this.onSearch.bind(this)}>
						<ul className="menu">
							<li>
								<input type="search" placeholder="Search weather"/>
							</li>
							<li>
								<input type="button" className="button" value="Get Weather"/>
							</li>
						</ul>
					</form>
				</div>
			</div>
    );
	}
}

module.exports = Nav;
