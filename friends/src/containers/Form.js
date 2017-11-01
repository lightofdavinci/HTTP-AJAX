import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
import { bindActionCreators } from 'redux';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
    this.addFriend = this.addFriend.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  addFriend(event) {
    event.preventDefault();
    if (this.state.name && this.state.age && this.state.email) {
        this.props.addFriend({
        name: this.state.name,
        age: parseInt(this.state.age, 10),
        email: this.state.email,
        });
        this.setState({
            name: '',
            age: '',
            email: '',
        });
    }
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            type="text"
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            type="email"
            onChange={this.updateEmail}
            placeholder="email"
            value={this.state.email}
          />
          <input type="button" value="submit" onClick={this.addFriend} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addFriend }, dispatch);
};  

export default connect(null, mapDispatchToProps)(Form);