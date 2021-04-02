import React, {useState} from 'react'

const TypeSelector = ({
                          widget,
                          editing,
                          setEditingWidget
                      }) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    return (
        <select
            onChange={(e) => {
                // set local cache to render immediately
                setCachedWidget(
                    cachedWidget => ({...cachedWidget, type: e.target.value}))
                setEditingWidget(
                    widget => ({...widget, type: e.target.value}))
            }}
            value={cachedWidget.type}
            className="form-control">
            <option value={"PARAGRAPH"}>PARAGRAPH</option>
            <option value={"HEADING"}>HEADING</option>
            <option value={"LIST"}>List</option>
            <option value={"IMAGE"}>Image</option>
        </select>
    )
}

export default TypeSelector;
