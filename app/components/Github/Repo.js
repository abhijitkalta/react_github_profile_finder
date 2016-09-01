var React = require('react');

var Repo = React.createClass({

 render: function(){
   return (

     <li className="list-group-item">
      <a href={this.props.html_url}> {this.props.name} </a> : {this.props.description}
     </li>

   );
 }
});

module.exports = Repo;
