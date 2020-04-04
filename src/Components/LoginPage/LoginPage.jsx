import React from "react";
import { Form, Button } from "react-bootstrap";
import MenuCard from "../../containers/MenuCard";
import {submitLogin} from "./functions/submitActions";

class LoginPage extends React.Component {
    state = {
        email: "",
        password: ""
    }

    onChange = (e) => {
        const value = e.target.value;
    
        this.setState({
          [e.target.name]: value
        });
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if ( !form.checkValidity() )
            e.stopPropagation();
        else {
            const object = {
                email: this.state.email,
                password: this.state.password
            };
            submitLogin(object).then(res => {
                if (res.status === 200) {
                    console.log("dupa");
                }
            })
        }
    }

    render() {
        const { onChange, handleSubmit } = this;
        return(
            <MenuCard title="Login">
                <Form onSubmit={e => handleSubmit(e)}>
                    <Form.Group>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={e => onChange(e)}
                        />
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => onChange(e)}
                        />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
            </MenuCard>
        );
    }
}

export default LoginPage;