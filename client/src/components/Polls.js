import React, { Component } from 'react'
import { 
    Container,
    Row,
    Col,
    Button
 } from "reactstrap";
import {connect } from 'react-redux'
import DisplayPolls from './DisplayPolls'
import AddPoll from './AddPoll'
import { fetchPolls } from '../actions/pollAction'
class Polls extends Component {

    componentDidMount() {
        this.props.fetchPolls();
    }

    refreshPolls = () => {
        this.props.fetchPolls();
    }

    render() {
        const { lists } = this.props.polls
        return (
            <Container>
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6"><AddPoll /></Col>
                    <Col xs="3"></Col>
                </Row>
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6">
                        <DisplayPolls lists={lists} />
                    </Col>
                    <Col xs="3"></Col>
                </Row>
            </Container>
        );  
    }
}

const mapStatetoProps = state => ({
    polls: state.polls
})
export default connect(mapStatetoProps,{fetchPolls})(Polls)