var React = require('react');
var Repo = require('./Repo');

var RepoList = React.createClass({

  render : function(){
    var createListItem = function(item, index){
        return <Repo key={item.name + index} html_url={item.html_url} name={item.name} description={item.description} />
    };

    return (
      <div>
        <ul className="list-group">
          {this.props.userRepos.map(createListItem)}
        </ul>
      </div>
    );
  }

});

module.exports = RepoList;
