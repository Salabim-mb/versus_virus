import React from "react";
import MenuCard from "../../containers/MenuCard";

class UserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    };

    render() {
        return (
            <MenuCard
                title="My profile"
                >
                My data.
            </MenuCard>
        )
    }
}

export default UserPage;