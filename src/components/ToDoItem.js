var React = require('react')

module.exports =  React.createClass({
  getInitialState: function() {
    return {completed: this.props.todoCompleted}
  },
  handleCheckComplete: function(e) {
    this.props.onCheckComplete({
      id: this.props.todoId,
      text: this.props.todoText,
      completed: !this.props.todoCompleted
    })
  },
  render: function() {
    var text = this.props.todoCompleted ? (<s>{this.props.todoText}</s>) : this.props.todoText
    return (
      <li>
        <p>
          <input type="checkbox" checked={this.props.todoCompleted} onChange={this.handleCheckComplete}/>
          {text}
        </p>
      </li>
    )
  }
})
