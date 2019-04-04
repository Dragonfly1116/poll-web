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
const CommentVote = ({comments, closeModal}) => (
    <div>
          <ModalBody>
            {
                comments.map( ({_id,voter,comment}) => (
                    <div key={_id}>
                        {/* <Card>
                            <CardBody>
                            <CardTitle>{voter}</CardTitle>
                            <CardText>{comment}</CardText>
                            </CardBody>
                        </Card> */}
                        SOMEEEEE
                    </div>
                ))
            }  
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={closeModal}>Close</Button>
          </ModalFooter>
    </div>
)

CommentVote.propTypes = {
    comments: PropTypes.array.isRequired,
    closeModal: PropTypes.func.isRequired
}
export default CommentVote