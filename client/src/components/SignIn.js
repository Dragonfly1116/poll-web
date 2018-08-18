import React from 'react';
import {
    Row,
    Col,
    Button,
    FormGroup, 
    Label, 
    Input,
    Container,
} from 'reactstrap';
import axios from 'axios'
import {
    Redirect
} from 'react-router-dom'

export default class SignIn extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirectToReferrer: (localStorage.getItem('token') !== null) ? true : false
        }
    }
    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    onCancel = () => {
        this.setState({
            email: "",
            password: "",
        })
    }

    onSubmit = e => {
        if(this.state.email === '' || this.state.password === '') {
            return alert("Email and password are required!")
        }
        axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password
        }).then( res => {
            if(res.status === 200) {
                alert(res.data.message)
                localStorage.setItem('token', res.data.token)
                this.props.login()
                this.setState({
                    redirectToReferrer: true
                })
            } else {
                alert(res.data.message)
            }
        }).catch( err => {
            alert('Auth failed')
        })
        this.onCancel()
    }

    render() {
        const { redirectToReferrer } = this.state
        const {from} = {from :{ pathname: "/"} } ; 
        if(redirectToReferrer) {
            return <Redirect to={from} />;
        }
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
                    <Button onClick={this.onSubmit}>Sing In</Button>{' '}
                    <Button onClick={this.onCancel}>Cancel</Button>
                </Col>
            </Row>
        </Container>
    );
  }
}