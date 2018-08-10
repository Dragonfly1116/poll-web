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
import { fetchPolls, removePoll} from '../actions/pollAction'
import { getEmotions } from '../actions/emoAction'
import { getVotes } from '../actions/voteAction'
class Polls extends Component {

    componentDidMount() {
        this.props.fetchPolls();
        this.props.getEmotions();
        this.props.getVotes();
    }

    refreshPolls = () => {
        this.props.fetchPolls();
    }
    removePoll = e => {
        const poll = {
            id: e.target.id,
            emotions: this.props.emotions.lists
        }
        this.props.removePoll(poll);
    }
    render() {
        const { lists } = this.props.polls
        return (
            <Container>
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6"><AddPoll emotions={this.props.emotions.lists} /></Col>
                    <Col xs="3"></Col>
                </Row>
                <Row>
                    <Col xs="3"></Col>
                    <Col xs="6">
                        <DisplayPolls 
                            lists={lists} 
                            removePoll={this.removePoll} />
                    </Col>
                    <Col xs="3"></Col>
                </Row>
            </Container>
        );  
    }
}

const mapStatetoProps = state => ({
    polls: state.polls,
    emotions: state.emotions
})
export default connect(mapStatetoProps,{fetchPolls, getEmotions,getVotes, removePoll})(Polls)