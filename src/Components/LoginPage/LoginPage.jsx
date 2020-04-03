import React from "react";
import { Form, Button } from "react-bootstrap";
import MenuCard from "../../containers/MenuCard";

class LoginPage extends React.Component {
    state = {
        username: "",
        password: ""
    }

    onChange = (e) => {
        const value = e.target.value;
    
        this.setState({
          [e.target.name]: value
        });
    };
    
    handleSubmit = () => {
        alert(this.state.username);
        alert(this.state.password);
    }

    render() {
        const { onChange, handleSubmit } = this;
        return(
            <MenuCard title="Login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Control type="text" name="username" placeholder="Nickname" onChange={e => onChange(e)} />
                        <Form.Control type="password" name="password" placeholder="Password" onChange={e => onChange(e)} />
                    </Form.Group>
                    <Button type="submit">Login</Button>
                </Form>
            </MenuCard>
        );
    }
}

export default LoginPage;