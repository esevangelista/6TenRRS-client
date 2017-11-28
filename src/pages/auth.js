/* https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/app/Layouts/LoginLayout.js */

import React , {Component} from 'react'
import { Button, Form, Grid, Header, Image, Segment, Message} from 'semantic-ui-react'
import axios from 'axios';



class LoginForm extends Component{

  constructor(props){
    super(props);

    this.state = {
      username : '',
      password : ''
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

  }

  handleUsernameChange(e){
    this.setState({username : e.target.value });
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value });
  }
  handleOnSubmit(e){
    e.preventDefault();
    
    const { history } = this.props;
    axios.post('http://localhost:3001/api/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {

      history.push('/');
    })
    .catch(function (error) {

      switch(error.response.data.status){
        case 422:
          console.log(error.response.data.message);
          break;
      }


     });
  }
  render(){
    return(
      <div className='login-form' >
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' />
                 {' '}6 TEN RRS
              </Header>
              <Form size='large' onSubmit={this.handleOnSubmit}>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />

                  <Button color='teal'  fluid size='large'>Login</Button>
                </Segment>
              </Form>
            </Grid.Column>
        </Grid>
      </div>
    );
  }
}



export default LoginForm;