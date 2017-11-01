import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import { bindActionCreators } from 'redux';
import Friend from './Friend';

class FriendsList extends Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.friends.map((friend, i) => <Friend 
                        key={i} 
                        name={friend.name} 
                        age={friend.age} 
                        email={friend.email}
                        index={i} />)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getFriends }, dispatch);
};  

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);