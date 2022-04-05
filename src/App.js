import {connect} from "react-redux";
import {fetchUser} from "./actions";

function App(props) {
  const {users, error, isFetching, dispatchFetchUser} = props

  return (
    <div className="App">
      {users ? (
          <div>
            <span style={{fontWeight: 'bold'}}>List Users</span>
            <ul>
              {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
          </div>
      ) : (
          <span>No User</span>
      )}
      {isFetching ? (
          <button disabled>Fetching</button>
      ) : (
          <button onClick={() => dispatchFetchUser()}>Fetch Users</button>
      )}
      {error && <span style={{color: 'red'}}>Something went wrong!</span>}
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users,
  error: state.error,
  isFetching: state.isFetching
})

const mapDispatchToProps = dispatch => ({
  dispatchFetchUser: () => dispatch(fetchUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
