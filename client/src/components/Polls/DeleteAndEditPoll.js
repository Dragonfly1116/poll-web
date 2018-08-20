import React from 'react'
import {
    CardBody,
    Button
} from 'reactstrap'
import PropTypes from 'prop-types'
class DeleteAndEditPoll extends React.Component {
    
    render() {
        return (
            <CardBody>
                <Button onClick={this.props.edit} id={this.props.id}>Edit</Button>{' '}
                <Button onClick={this.props.delete} id={this.props.id}>Delete</Button>
            </CardBody>
        )
    }

}

DeleteAndEditPoll.propTypes = {
    edit: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default DeleteAndEditPoll