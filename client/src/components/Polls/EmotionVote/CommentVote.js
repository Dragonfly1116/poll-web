import React from 'react'
import PropTypes from 'prop-types'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap'
const CommentVote = (props) => (
    <div>
          <ModalBody>
            {
                props.comments.map( ({_id,userId,voteId,comment}) => (
                    <div key={_id}>
                        <Card>
                            <CardBody>
                            <CardTitle>{userId}</CardTitle>
                            <CardText>{comment}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                ))
            }  
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={props.closeModal}>Close</Button>
          </ModalFooter>
    </div>
)

CommentVote.propTypes = {
    comments: PropTypes.array.isRequired,
    closeModal: PropTypes.func.isRequired
}
export default CommentVote