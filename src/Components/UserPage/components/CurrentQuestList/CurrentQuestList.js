import React from "react";
import {ListGroup} from "react-bootstrap";
import CurrentQuest from "../CurrentQuest/CurrentQuest";

class CurrentQuestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quests: []
        }
    }

    componentDidMount() {
        //getActiveQuests()
    }

    mapQuestList = (array) => {
        const quests = array.map( quest => ({
            id: quest.id,
            name: quest.name,
            description: quest.description,
            progress: quest.progress,
            completed: quest.completed
        }));
        this.setState({
            quests: quests
        });
    };

    render() {
        const { quests } = this.state;
        return(
            <div className="user_page_quest_list">
                <ListGroup variant="flush">
                    {quests.map((quest) => (
                        <ListGroup.Item key={quest.id}>
                            <CurrentQuest
                                name={quest.name}
                                description={quest.description}
                                prog={quest.progress}
                                completed={quest.completed}
                            />
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        )
    }
}

export default CurrentQuestList;