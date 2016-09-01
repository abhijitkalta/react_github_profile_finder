var React = require('react');

var Search = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var username = this.refs.username.value.trim();
    if(!username){
      alert("Error");
      return null;
    }
    this.props.onFormSubmit(username);
    this.refs.username.value = "";
  },

  render : function(){
      return (
        <div>
          <form className="form-group" onSubmit={this.handleSubmit}>
            <label>Search Github users </label>
            <input type="text" ref="username" className="form-control"/>
          </form>

        </div>
      )
  }

});


module.exports = Search;
