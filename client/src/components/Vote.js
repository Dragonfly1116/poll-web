import React from 'react';
import { Button,
        Modal,
        ModalHeader,
        ModalBody,
        ModalFooter } from 'reactstrap';

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectEmo: ''
    };

    this.toggle = this.toggle.bind(this);
    this.vote = this.vote.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  vote(e) {
    if(this.state.selectEmo !== '') {
        this.toggle();
    } else {
        e.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Vote</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
          <ModalBody>
            VOTE ซะ
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.vote}>Vote</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Vote;