var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass ({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight:'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to='/' activeClassName="active" activeStyle={{fontWeight:'bold'}} target="_blank">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">     
          <span>Created by: <a href="https://github.com/stuarttiedemann" target="_blank">Stuart Tiedemann</a></span>
        </div>
      </div>
    );
  }
});

module.exports = Nav;