import React, { Component } from 'react'
import { 
    Container,
    Row,
    Col,
    Card
 } from "reactstrap";
import {connect } from 'react-redux'
import {fetchPolls} from '../../actions/pollAction'
import {DisplayPoll} from './DisplayPoll'
import PollVote from './PollVote/PollVote'
class Polls extends Component {
    componentDidMount() {
        this.props.fetchPolls();
    }
    render() {
        const { lists } = this.props.polls;
        return (
            <Container>
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
}) 

export default connect(mapStatetoProps,{fetchPolls})(Polls);