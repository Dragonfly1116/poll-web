import React from "react";
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
} from "reactstrap";
import PropTypes from "prop-types";
class CreatePoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
      options: [{ value: "", vote: [] }]
    };
  }

  onCreateOption = () => {
    this.setState({
      options: [...this.state.options, { value: "", vote: [] }]
    });
  };

  onOptionChange = e => {
    let newOption = this.state.options
    newOption[e.target.id].value = e.target.value;
    this.setState({
      options: newOption
    });
  };
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  toggleAndCreate = () => {
    this.toggle();
    const state = this.state
    this.props.createPoll({
      ...state
    });
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { options } = this.state;
    return (
      <div>
        <Button color="info" onClick={this.toggle}>
          Create Poll
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>New poll</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  onChange={this.onChange}
                  type="text"
                  id="name"
                  placeholder="Name of Poll"
                />
              </FormGroup>
              <FormGroup>
                <Label>Content</Label>
                <Input onChange={this.onChange} type="textarea" id="content" />
              </FormGroup>
              <FormGroup>
                <Label>Options</Label>
                {options.map((option, index) => {
                  return (
                    <FormGroup>
                      <Input
                        value={option.value}
                        id={index}
                        placeholder={`option ${index+1}`}
                        onChange={this.onOptionChange}
                      />
                    </FormGroup>
                  );
                })}
              </FormGroup>
              <Button outline color="info" onClick={this.onCreateOption}>
                Add more option...
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleAndCreate}>
              Create
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
CreatePoll.proptypes = {
  createPoll: PropTypes.func.isRequired
};
export default CreatePoll;
