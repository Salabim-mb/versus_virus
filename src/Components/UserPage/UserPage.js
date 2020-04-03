import React from "react";
import MenuCard from "../../containers/MenuCard";

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

export default UserPage;