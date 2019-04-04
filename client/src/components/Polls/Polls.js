import React, { Component } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { connect } from "react-redux";
import {
  fetchPolls,
  votePoll,
  createPoll,
  removePoll
} from "../../actions/pollAction";
import { DisplayPoll } from "./DisplayPoll";
import CreatePoll from "./CreatePoll";
import PropTypes from "prop-types";
import OptionsVote from "./OptionsVote";
import DeleteAndEditPoll from "./DeleteAndEditPoll";
class Polls extends Component {
  componentDidMount() {
    this.props.fetchPolls();
  }

  createPoll = poll => {
    this.props.createPoll(poll);
  };

  handleVote = ({ option_id, poll_id }) => {
    let { lists } = this.props.polls;
    lists.map(poll => {
      if (poll._id === poll_id) {
        poll.options.map(option => {
          if (option._id === option_id) {
            option.vote.push(localStorage.getItem("user"));
          }
        });
        poll.totalVote += 1;
        this.props.votePoll({ poll,id: poll_id });
      }
    });
  };

  removePoll = e => {
    const POLL = {
      id: e.target.id
    };
    this.props.removePoll(POLL);
  };

  render() {
    const { lists } = this.props.polls;
    return (
      <Container>
        <Row>
          <div style={{ margin: "20px" }}>
            {this.props.isLoggedIn ? (
              <CreatePoll createPoll={this.createPoll} />
            ) : (
              ""
            )}
          </div>
        </Row>
        {lists.map(
          ({ _id, name, content, date, author, options, totalVote }) => (
            <Row key={_id} style={{ marginTop: "20px" }}>
              <Col xs="2" />
              <Col xs="8">
                <Card>
                  <DisplayPoll
                    name={name}
                    content={content}
                    date={date}
                    user={author}
                  />
                  <OptionsVote
                    handleVote={data =>
                      this.handleVote({ ...data, poll_id: _id })
                    }
                    maxVote={totalVote}
                    options={options}
                  />
                  {author === localStorage.getItem("user") ? (
                    <DeleteAndEditPoll
                      delete={this.removePoll}
                      id={_id}
                      name={name}
                      content={content}
                      options={options}
                    />
                  ) : (
                    ""
                  )}
                </Card>
              </Col>
              <Col xs="2" />
            </Row>
          )
        )}
      </Container>
    );
  }
}

Polls.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStatetoProps = state => ({
  polls: state.polls
});

export default connect(
  mapStatetoProps,
  { fetchPolls, removePoll, createPoll, votePoll }
)(Polls);
