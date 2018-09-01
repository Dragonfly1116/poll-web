import React from 'react'
import {connect} from 'react-redux'
import {getVotes} from '../../../actions/voteAction'
import { CardBody,Container } from 'reactstrap';
import PropTypes from 'prop-types'
import EmotionVote from '../EmotionVote/EmotionVote'
class PollVote extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            NumberOfVote: 0
        }
    }
    
    countVotes = count => {
        this.setState({
            NumberOfVote: this.state.NumberOfVote + count 
        })
    }

    componentDidMount() {
        this.props.getVotes()
        const { lists } = this.props.votes
        lists.map( ({pollId,count}) => {
            if(pollId === this.props.pollId) {
                this.countVotes(count)
            }
        })
    }
    render() {
        const { lists } = this.props.votes
        return (
            <CardBody>
                <Container>
            {
                lists.map( ({_id,emoType,count,pollId}) => {
                    if(pollId === this.props.pollId) {
                        return (
                            <EmotionVote
                                key={_id}
                                voteId={_id}
                                emoType={emoType}
                                emotions={this.props.emotions}
                                count={count}
                                pollId={pollId}
                                allCount={this.state.NumberOfVote}
                                />
                        )
                    }
                })
            }
                </Container>
            </CardBody>
        );
    }
}
PollVote.propTypes = {
    pollId: PropTypes.string.isRequired
}
const mapStatetoProp = state => ({
    votes: state.votes
})
export default connect(mapStatetoProp,{getVotes})(PollVote);