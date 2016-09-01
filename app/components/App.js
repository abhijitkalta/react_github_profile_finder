var React = require('react');
var ReactDOM = require('react-dom');
var Profile = require('./Github/Profile');

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

  //get user data
  getUserData(){
      $.ajax({
        url : 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret ,
        dataType: 'json',
        cache: false,
        success: function(data){
          this.setState({ userData: data});
          console.log(data);
        }.bind(this),
        error: function(xhr, status, error){
          this.setState({username: null });
          alert(err);
        }.bind(this)
      });
  },

// get user repos
  getUserRepos(){
      $.ajax({
        url : 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret +'&sort=created',
        dataType: 'json',
        cache: false,
        success: function(data){
          this.setState({ userRepos: data});
          console.log(data);
        }.bind(this),
        error: function(xhr, status, error){
          this.setState({username: null });
          alert(err);
        }.bind(this)
      });
  },

  componentDidMount(){
      this.getUserData();
  },

  render : function(){
    return (
      <div>
          <Profile userData = {this.state.userData}/>
      </div>
    );
  }
});

module.exports = App ;
