const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            const mstate = {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
            return mstate
        case "DELETE_WIDGET":
            const mstate2 = {
                widgets: state.widgets.filter(widget => {
                    if(widget.id === action.wid) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return mstate2
        case "UPDATE_WIDGET":
            return {
                // widgets: state.widgets.map(widget => {
                //     if(widget.id === action.wid) {
                //         return action.widget
                //     } else {
                //         return widget
                //     }
                // })

                ...state,
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.updatedWidget.id) {
                        return action.updatedWidget
                    } else {
                        return widget
                    }
                })

            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer