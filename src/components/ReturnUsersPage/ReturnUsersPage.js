import React, {Component} from 'react';
import { connect } from 'react-redux';

class ReturnUsersPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'GET_RETURNUSERS'});
  }

  render() {
    return (
      <div>
        <p>Currently logged in as <b>{this.props.user.username}</b></p>
        <ul>
          {this.props.returnUsers.map((people, i) => (
            <li key={i}>
              User name: {people.username}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  returnUsers: state.returnUsers,
  user: state.user,
});

export default connect(mapStateToProps)(ReturnUsersPage);