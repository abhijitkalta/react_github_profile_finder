var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  getInitialState : function(){
      return {
        username: 'abhijitkalta' ,
        userData: [],
        userRepos: [],
        perPage: 5
      }
  },
  getDefaultProps : function(){
    return {
      clientId : '699d5d11b7d8648d4ef1',
      clientSecret: '44a803a6fcbcd2c1fc07c9a592bef501eae50a72'
    }
  },

  propTypes: {
    clientId : React.PropTypes.string,
    clientSecret : React.PropTypes.string
  },

  render : function(){
    return (
      <div>

      </div>
    );
  }
});

module.exports = App ;
