import React, { Component } from 'react'
import { 
    Container,
    Row,
    Col,
    Card
 } from "reactstrap";
import {connect } from 'react-redux'
import {fetchPolls, createPoll} from '../../actions/pollAction'
import { getEmotions } from '../../actions/emoAction'
import {DisplayPoll} from './DisplayPoll'
import CreatePoll from './CreatePoll'
import PollVote from './PollVote/PollVote'
class Polls extends Component {
    componentDidMount() {
        this.props.fetchPolls();
        this.props.getEmotions();
    }

    createPoll = poll => {
        const POLL = {
            name: poll.name,
            content: poll.content,
            emotions: this.props.emotions.lists
        }
        this.props.createPoll(POLL)
    }

    render() {
        const { lists } = this.props.polls;
        return (
            <Container>
                <Row>
                    <CreatePoll 
                        createPoll={this.createPoll}
                        />
                </Row>
                {lists.map( ({_id,name,content,date}) => (
                    <Row key={_id}>
                        <Col xs="2" ></Col>
                        <Col xs="8" >
                            <Card>
                                <DisplayPoll
                                    name={name}
                                    content={content}
                                    date={date}
                                    />
                                <PollVote
                                    pollId={_id}
                                    />
                            </Card> 
                        </Col>
                        <Col xs="2" ></Col>
                    </Row>
                ))}
            </Container>
        );  
    }
}

const mapStatetoProps = state => ({
    polls: state.polls,
    emotions: state.emotions
}) 

export default connect(mapStatetoProps,{fetchPolls,createPoll,getEmotions})(Polls);