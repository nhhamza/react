import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";
import Axios from "axios";
import { getUserList } from "../api/actions/userAction"

// App component
export class App extends React.Component {
  
  componentWillMount() {
    //fetch users and store it in redux store.
    Axios.get("https://reqres.in/api/users?page=1")
      .then((response) =>  {
        this.props.getUserList(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // render
  render() {
    // show the loading state while we wait for the app to load
    const { users, children } = this.props;
      
    if (!this.props.users.data) {
      return <ProgressBar active now={100} />;
    }

    // render
    return (
      <div className="container">
        <div>
          <Menu />
        </div>
        <div>{children}</div>
        <div className="footer">
          <img src="/media/logo.svg" />
        </div>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    users: state.users || []
  };
}

const mapDispatchToProps = dispatch => ({
  getUserList: users => {
    dispatch(getUserList(users));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
