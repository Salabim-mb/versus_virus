import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MenuCard from "../../containers/MenuCard";
import {registerUser} from "./functions/submitActions";

class RegisterPage extends React.Component {
  state = {
    email: "",
    name: "",
    username: "",
    password: "",
    passwordR: "",
    areEqual: true,
    validated: false,
    redirect: false
  };

  onChange = (e) => {
    const value = e.target.value;

    this.setState({
      [e.target.name]: value
    });
  };


  handleSubmit = event => {
      event.preventDefault();
      const form = event.currentTarget;

      if ( !form.checkValidity() )
          event.stopPropagation();
      else if(this.state.password !== this.state.passwordR){
            this.setState({
                areEqual: false
            });
      } else {
          const {email, username, password, passwordR} = this.state;
          const obj = {
              email: email, username: username, password1: password, password2: passwordR
          };
          registerUser(obj).then( response => {
            const {status} = response;
            if (status === 200) {
                console.log("dupa");
            }
          });
      }

        console.log(this.state.name);
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    const {
      email,
      name,
      username,
      password,
      passwordR,
      areEqual,
      validated
    } = this.state;
    const { onChange, handleSubmit } = this;
    return (
        <MenuCard title="New Account">
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={e => handleSubmit(e)}
                    >
                        <Form.Group controlId="formGroupFirstName" className="">
                            <Form.Control
                                type="text"
                                autoComplete="on"
                                placeholder="Name"
                                value={name}
                                name="name"
                                onChange={e => onChange(e)}
                                required
                                minLength="1"
                                maxLength="30"
                            />
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                name = "email"
                                onChange={e => onChange(e)}
                                className="loginPage__input"
                                maxLength="50"
                            />
                            <Form.Control
                                type="text"
                                placeholder="Nickname"
                                required
                                value={username}
                                name="username"
                                onChange={e => onChange(e)}
                                maxLength="50"
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                        <Row>
                            <Col>
                        <Form.Control
                            inline
                            type="password"
                            autoComplete="on"
                            placeholder="Password"
                            value={password}
                            name="password"
                            onChange={e => onChange(e)}
                            required
                            minLength="6"
                            maxLength="30"
                            
                        />
                        </Col>
                        <Col>
                        <Form.Control
                            inline
                            type="password"
                            placeholder="Repeat password"
                            value={passwordR}
                            name="passwordR"
                            onChange={e => onChange(e)}
                            required
                            minLength="6"
                            
                        />
                        </Col>
                        </Row>
                        </Form.Group>
                        {!areEqual ? (
                            <small className="invalidMessage">
                            Passwors are different!
                            </small>
                        ) : (
                            ""
                        )}
                        
                        
                        <Button
                            variant="secondary"
                            className="loginPage__button"
                            type="submit"
                        >
                            Create account
                        </Button>
                    </Form>
        </MenuCard>
    )};
} 

export default RegisterPage;