import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigatorBar from './NavigatorBar' 
import Polls from './Polls/Polls'
import SignUp from './SignUp'
import SignIn from './SignIn'
class Root extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    handleLogout = () => {
        localStorage.removeItem('token')
        this.setState({
            isLoggedIn: false
        })
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    componentDidMount() {
        this.setState({
            isLoggedIn: (localStorage.getItem('token') !== null) ? true:false
        })
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <Router>
                    <div>
                        <NavigatorBar isLoggedIn={this.state.isLoggedIn} logout={this.handleLogout} />
                        <Route exact path="/" component={Polls} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/signin" render={ () => <SignIn login={this.handleLogin}/> } />
                    </div>
                </Router>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;