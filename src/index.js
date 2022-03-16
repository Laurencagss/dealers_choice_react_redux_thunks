import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from "react-redux";
import store, { getFriends } from "./store";
import axios from "axios";

const _Friends = ({ friends }) => {
    return friends.map((friend) => {
      return (
        <div key={friend.id} className="friend">
          <span><img src={friend.imageLink} alt={friend.name}></img></span>
          <span className='description'>{friend.name}</span>
          <span>Remove? <br/> <button>X</button></span>
        </div>
      );
    });
  };
  
  // get state
  const mapStateToProps = (state) => {
    return {
      friends: friends.photos,
    };
  };
  
  // set state
  const mapDispatchToProps = (dispatch) => {
    return {
      getFriends: () => dispatch(getFriends()),
    };
  };
  
  class _App extends Component {
    componentDidMount() {
      this.props.getFriends();
    }
    render() {
      return (
        <div>
          <h1>My Friends</h1>
  
          <Friends />
        </div>
      );
    }
  }
  
  const Friends = connect(mapStateToProps, mapDispatchToProps)(_Friends);
  const App = connect(mapStateToProps, mapDispatchToProps)(_App);
  
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector("#root")
  );