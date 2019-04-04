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
import { connect } from "react-redux";
import { editPoll } from "../../actions/pollAction";
class EditPoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: "",
      options: [{ value: "", vote: [] }]
    };
  }
  componentDidMount() {
    this.setState({
      name: this.props.name,
      content: this.props.content,
      options: this.props.options
    });
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
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  toggleAndEdit = () => {
    const POLL = {
      id: this.props.id,
      name: this.state.name,
      content: this.state.content,
      options: this.state.options
    };
    this.props.editPoll(POLL);
    this.toggle();
  };

  render() {
    const { options } = this.state;
    return (
      <div>
        <Button color="info" onClick={this.toggle}>
          Edit Poll
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Edit</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  onChange={this.onChange}
                  type="text"
                  id="name"
                  value={this.state.name}
                />
              </FormGroup>
              <FormGroup>
                <Label>Content</Label>
                <Input
                  onChange={this.onChange}
                  type="textarea"
                  id="content"
                  value={this.state.content}
                />
              </FormGroup>
              <FormGroup>
                <Label>Options</Label>
                {options.map((option, index) => {
                  return (
                    <FormGroup>
                      <Input
                        value={option.value}
                        id={index}
                        placeholder={`option ${index + 1}`}
                        onChange={this.onOptionChange}
                      />
                    </FormGroup>
                  );
                })}
                <Button outline color="info" onClick={this.onCreateOption}>
                  Add more option...
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleAndEdit}>
              Edit
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
EditPoll.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
export default connect(
  null,
  { editPoll }
)(EditPoll);
