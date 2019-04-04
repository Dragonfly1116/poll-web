import React from "react";
import { CardBody, Container } from "reactstrap";
import { Modal, Row, Col, Button, Progress } from "reactstrap";
import CommentVote from "./CommentVote";
import { Card, CardTitle, CardText, ModalBody, ModalFooter } from "reactstrap";

const rowStyle = {
  marginBottom: "20px"
};

class OptionsVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggle = e => {
    this.setState({
      [e.target.name]: ![e.target.name]
    });
  };

  onHandleVote = (_id,vote) => {
    if(!vote.includes(localStorage.getItem("user"))) {
      this.props.handleVote({option_id: _id})
    }
  }

  render() {
    const { options, maxVote } = this.props;
    return (
      <CardBody>
        <Container>
          {options.map(option => {
            this.setState();
            return (
              <Row style={rowStyle} key={option._id}>
                <Col sm="2">
                  <Button
                    color="success"
                    onClick={() => this.onHandleVote(option._id,option.vote)}
                    active={option.vote.includes(localStorage.getItem("user"))}
                  >
                    Vote
                  </Button>
                </Col>
                <Col sm="3">{option.value}</Col>
                <Col>
                  <Progress value={option.vote.length} max={maxVote} />
                </Col>
              </Row>
            );
          })}
        </Container>
      </CardBody>
    );
  }
}

export default OptionsVote;
