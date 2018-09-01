import React from 'react'
import PropTypes from 'prop-types'
import {
    Modal,
    Row,
    Col,
    Button,
    Progress
} from 'reactstrap'

import CommentVote from './CommentVote'
import { getComment } from '../../../actions/commentAction'
import { connect } from 'react-redux';
const rowStyle = {
    marginBottom: '20px'
}

class EmotionVote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
    }

    componentDidMount() {
        this.props.getComment()
    }

    toggle = e => {
        e.preventDefault()
        this.setState({
          modal: !this.state.modal
        });
    }
    render() {
        return (
                <Row style={rowStyle}>
                    <Col  sm="2"><img src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/129/smiling-face-with-open-mouth_1f603.png" /></Col>
                    <Col  sm="8">
                        <Progress value={this.props.count} max={this.props.allCount} />
                    </Col>
                    <Col  sm="2" >
                        <Button size="sm" color="info" onClick={this.toggle}>Comments</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <CommentVote
                                comments={this.props.comment.lists}
                                closeModal={this.toggle}
                                />
                        </Modal>
                    </Col>
                </Row>
        )
    }
}

EmotionVote.propTypes = {
    voteId: PropTypes.string.isRequired,
    emoType: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    allCount: PropTypes.number.isRequired,
    pollId: PropTypes.string.isRequired
}
const mapStatetoProps = state => ({
    comment: state.comment
})
export default connect(mapStatetoProps,{ getComment })(EmotionVote)