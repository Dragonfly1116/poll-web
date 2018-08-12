import React from 'react'
import {
    Button,
    Modal,
    Input,
    Label,
    FormGroup,
    ModalFooter,
    ModalBody,
    ModalHeader,
    Form
} from 'reactstrap'
import PropTypes from 'prop-types'
class CreatePoll extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            content: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    toggleAndCreate = () => {
        this.toggle();
        this.props.createPoll({
            name: this.state.name,
            content: this.state.content
        })
    }
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>Create Poll</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Create new poll</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label >Name</Label>
                            <Input onChange={this.onChange} type="text" id="name" placeholder="Name of Poll" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Content</Label>
                            <Input onChange={this.onChange} type="textarea" id="content" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggleAndCreate}>Create</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}
CreatePoll.proptypes = {
    createPoll: PropTypes.func.isRequired
}
export default CreatePoll