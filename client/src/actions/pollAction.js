import axios from "axios";
import { GET_POLLS, ADD_POLL, GET_POLL, REMOVE_POLL, EDIT_POLL } from "./types";
import { createVote, removeVote } from "./voteAction";

export const removePoll = poll => dispatch => {
  axios
    .delete(`/api/poll/${poll.id}`, {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: REMOVE_POLL,
        id: poll.id
      });
    });
};

export const getPoll = _id => dispatch => {
  axios
    .get(`/api/polls/${_id}`, {
      header: { Authorization: "Bearer " + localStorage.getItem("token") }
    })
    .then(res =>
      dispatch({
        type: GET_POLL,
        id: _id,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const editPoll = poll => dispatch => {
  axios
    .put(
      `/api/poll/${poll.id}`,
      {
        name: poll.name,
        content: poll.content,
        options: poll.options,
      },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    )
    .then(res =>
      dispatch({
        type: EDIT_POLL,
        payload: poll,
        id: poll.id
      })
    )
    .catch(err => console.log(err));
};

export const votePoll = ({poll,id}) => dispatch => {
  console.log(poll)
  axios
    .put(
      `/api/poll/vote/${id}`,
      {
        totalVote: poll.totalVote,
        options: poll.options,
      },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    )
    .then(res =>
      dispatch({
        type: EDIT_POLL,
        payload: poll,
        id: poll.id
      })
    )
    .catch(err => console.log(err));
};

export const createPoll = poll => dispatch => {
    console.log(poll)
  axios
    .post(
      "/api/polls/",
      {
        name: poll.name,
        content: poll.content,
        email: localStorage.getItem("user"),
        options: poll.options,
      },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    )
    .then(res => {
      dispatch({
        type: ADD_POLL,
        payload: res.data
      });
    });
};

export const fetchPolls = () => dispatch => {
  axios
    .get("/api/polls/")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_POLLS,
        list: res.data
      });
    })
    .catch(err => console.log(err));
};
