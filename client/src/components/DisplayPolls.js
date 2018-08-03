import React, { Component } from 'react'
import { 
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle
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
                                        <Vote name={name} />
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
    lists: PropTypes.array.isRequired
}
export default DisplayPolls