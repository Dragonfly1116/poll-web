import React from 'react';
import {
    Row,
    Col,
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Container,
} from 'reactstrap';
import axios from 'axios'

export default class SignUp extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    onCancel = () => {
        this.setState({
            email: '',
            password: ''
        })
    }

    onSubmit = e => {
        if(this.state.email === '' || this.state.password === '') {
            return alert("Email and password are required!")
        }
        axios.post('/api/users', {
            email: this.state.email,
            password: this.state.password
        }).then( res => {
            if(res.status === 200) {
                alert("You can login with your email and password now!")
            } else {
                alert("Your signup is failed. Please change your email or password")
            }
        }).catch( err => {
           alert(err) 
        })
        this.onCancel()
    }

    render() {
    return (
        <Container>
            <Row style={{ margin: '100px'}}>
                <Col>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input onChange={this.onChange} value={this.state.email} type="email" name="email" id="email" placeholder="example@gmail.com" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input onChange={this.onChange} value={this.state.password} type="password" name="password" id="password" placeholder="*********" />
                    </FormGroup>
                    <br />
                    <Button onClick={this.onSubmit}>Sign Up</Button>{' '}
                    <Button onClick={this.onCancel}>Cancel</Button>
                </Col>
            </Row>
        </Container>
    );
  }
}