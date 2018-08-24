import React from 'react'
import {
    CardBody,
    Button
} from 'reactstrap'
import PropTypes from 'prop-types'
import EditPoll from './EditPoll'
class DeleteAndEditPoll extends React.Component {
    
    render() {
        return (
            <CardBody>
                <EditPoll name={this.props.name} content={this.props.content} id={this.props.id} /><br />
                <Button onClick={this.props.delete} id={this.props.id}>Delete</Button>
            </CardBody>
        )
    }

}

DeleteAndEditPoll.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    delete: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default DeleteAndEditPoll