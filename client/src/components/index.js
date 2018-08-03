import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigatorBar from './NavigatorBar' 
import Polls from './Polls' 
const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={NavigatorBar} />
                <Route exact path="/" component={Polls} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;