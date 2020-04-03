import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import MenuCard from "../containers/MenuCard";

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
    if(this.state.password !== this.state.passwordR){
        this.setState({
            areEqual: false
        });
    }

    alert(this.state.name);
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
                        onSubmit={handleSubmit}
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
                        <Form.Control
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

                        <Form.Control.Feedback type="invalid">
                            Minimum 6 characters
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formGroupPasswordRepeat">
                        <Form.Control
                            type="password"
                            placeholder="Repeat password"
                            value={passwordR}
                            name="passwordR"
                            onChange={e => onChange(e)}
                            required
                            minLength="6"
                        />
                        <Form.Control.Feedback type="invalid">
                            Minimum 6 characters
                        </Form.Control.Feedback>
                        {!areEqual ? (
                            <small className="invalidMessage">
                            Passwors are different!
                            </small>
                        ) : (
                            ""
                        )}
                        </Form.Group>
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

//RegisterPage.contextType = UserContext;

export default RegisterPage;