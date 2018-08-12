import React from 'react'
import {
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'
export const DisplayPoll = (props) => (
    <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.content}</CardText>
          <CardText>
            <small className="text-muted">{props.date}</small>
          </CardText>
    </CardBody>
)

