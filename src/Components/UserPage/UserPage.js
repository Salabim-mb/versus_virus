import React from "react";
import MenuCard from "../../containers/MenuCard";
import {UserContext} from "../../context";

class UserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            stats: null,
            current_quests: null
        }
    };

    render() {
        return (
            <MenuCard title="My profile">
                My data.
            </MenuCard>
        )
    }
}

UserPage.contextType = UserContext;

export default UserPage;