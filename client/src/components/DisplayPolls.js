import React, { Component } from 'react'
import { 
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    Button
 } from "reactstrap";
import PropTypes from 'prop-types'
import Vote from './Vote'
class DisplayPolls extends Component {

    render() {
        return (
            <Container>
                {
                    this.props.lists.map( ({_id,name,content,date}) => (
                        <Row key={_id}>
                            <Col>
                                <Card>
                                    <CardBody>
                                        <CardTitle>{name}</CardTitle>
                                        <CardSubtitle>{date}</CardSubtitle>
                                        <CardText>
                                            {content}
                                        </CardText>
                                    </CardBody>
                                    <CardBody>
                                        <Container >
                                            <Row>
                                                <Col>
                                                    <Vote name={name} />{' '}
                                                </Col>
                                                <Col>
                                                    <Button id={_id} onClick={this.props.removePoll}>Delete</Button>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    ))
                }
            </Container>
        );  
    }
}
DisplayPolls.propTypes = {
    lists: PropTypes.array.isRequired,
    removePoll: PropTypes.func.isRequired
}
export default DisplayPolls