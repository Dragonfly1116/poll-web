import React from 'react';
import {
        Form,
        Input, 
        Button,
        Label,
        Modal, 
        ModalHeader, 
        ModalBody,
        ModalFooter } from 'reactstrap';
import { newPoll } from '../actions/pollAction'
import { connect } from 'react-redux'

class AddPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      content: '',
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  submit = e => {
    e.preventDefault();
    const poll = {
        name: this.state.name,
        content: this.state.content
    }
    this.props.newPoll(poll)
    this.toggle()    
  } 

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Create Poll</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create Poll</ModalHeader>
          <ModalBody>
            <Form>
                <Input placeholder="Title" name="name" onChange={this.handleChange} />
                <Label for="textarea">Content</Label>
                <Input type="textarea" name="content" id="content" onChange={this.handleChange} />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submit}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(null,{ newPoll })(AddPoll);