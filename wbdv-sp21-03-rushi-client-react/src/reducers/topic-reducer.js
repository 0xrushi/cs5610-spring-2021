const initialState = {
    selected: null,
    topics: [
        // {title: 'Topic 1', _id: '123'},
        // {title: 'Topic 2', _id: '234'},
        // {title: 'Topic 3', _id: '345'},
        // {title: 'Topic 4', _id: '345'},
    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS_FOR_LESSON":
            return {
                ...state,
                topics: action.topics
            }
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(topic => {
                    if (topic._id === action.updatedTopic._id) {
                        return action.updatedTopic
                    } else {
                        return topic
                    }
                })
            }
        case "DELETE_TOPIC":
            var newstate= {
                topics: state.topics.filter(topic => {
                    if (topic._id === action.deleteItem._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            console.log(newstate);
            return newstate
        case "CLEAN_TOPIC":
            return {
                ...state,
                topics: []
            }

        default:
            return state
    }
}

export default topicReducer