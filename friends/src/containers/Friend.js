import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFriend } from '../actions';

class Friend extends Component {
    constructor(){
        super()
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        this.props.removeFriend(this.props.index);
    }

    render() {
            return (
                <li>
                    <p>{`Name: ${this.props.name}`}</p>
                    <p>{`Age: ${this.props.age}`}</p>
                    <p>{`Email: ${this.props.email}`}</p>
                    <button onClick={this.handleDelete}> Delete </button>
                </li>
            );       
    }
}
    
    
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ removeFriend }, dispatch);
};  

export default connect(null, mapDispatchToProps)(Friend);
