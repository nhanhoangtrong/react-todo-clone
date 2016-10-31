var React = require('react')

module.exports =  React.createClass({
  getInitialState: function() {
    return {text: ''}
  },
  handleToDoSubmit: function(e) {
    this.props.onToDoCreate(this.refs.todoText.value) // call the handle from above
    this.setState({text: ''}) // Reset input to none
    e.preventDefault() // Stop default handle
  },
  render: function() {
    return (
      <form onSubmit={this.handleToDoSubmit}>
        <input ref="todoText" type="text" value={this.props.text}/>
        <input type="submit" value="Add"/>
      </form>
    )
  }
})
