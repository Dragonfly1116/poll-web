import React, { Component } from 'react'
import { 
    Container,
    Row,
    Col,
    Card,
 } from "reactstrap";
import {connect } from 'react-redux'
import {fetchPolls, createPoll,removePoll} from '../../actions/pollAction'
import { getEmotions } from '../../actions/emoAction'
import {DisplayPoll} from './DisplayPoll'
import CreatePoll from './CreatePoll'
import PropTypes from 'prop-types'
import PollVote from './PollVote/PollVote'
import DeleteAndEditPoll from './DeleteAndEditPoll';
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

    removePoll = e => {
        const POLL = {
            id: e.target.id,
            emotions: this.props.emotions.lists
        }
        this.props.removePoll(POLL);
    }

    render() {
        const { lists } = this.props.polls;
        return (
            <Container>
                <Row>
                    <div style={{ margin: "20px"}}>
                        {
                            (this.props.isLoggedIn)? <CreatePoll createPoll={this.createPoll} /> : ("")
                        }
                    </div>   
                </Row>
                {lists.map( ({_id,name,content,date,user}) => (
                    <Row key={_id} style={{marginTop: "20px"}}>
                        <Col xs="2" ></Col>
                        <Col xs="8" >
                            <Card>
                                <DisplayPoll
                                    name={name}
                                    content={content}
                                    date={date}
                                    user={user}
                                    />
                                <PollVote
                                    pollId={_id}
                                    />
                                { (user === localStorage.getItem('user'))
                                ? 
                                    <DeleteAndEditPoll 
                                        delete={this.removePoll} 
                                        id={_id}
                                        name={name}
                                        content={content} />
                                : "" }
                            </Card> 
                        </Col>
                        <Col xs="2" ></Col>
                    </Row>
                ))}
            </Container>
        );  
    }
}

Polls.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

const mapStatetoProps = state => ({
    polls: state.polls,
    emotions: state.emotions
}) 

export default connect(mapStatetoProps,{fetchPolls,removePoll,createPoll,getEmotions})(Polls);