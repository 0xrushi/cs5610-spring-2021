import React, {useState} from 'react'
import TypeSelector from "./type-selector";

const ListWidget = (
    {
        widget,
        editing,
        setEditingWidget
    }) => {
    const [cachedWidget, setCachedWidget] = useState(widget)

    return (
        <>
            {
                editing &&
                <>
                    <TypeSelector
                        widget={widget}
                        editing={editing}
                        setEditingWidget={setEditingWidget}/>

                    <input
                        onChange={(e) => {
                            setCachedWidget(
                                cachedWidget => ({
                                    ...cachedWidget,
                                    // switch for check box
                                    ordered: !cachedWidget.ordered
                                }))
                            setEditingWidget(
                                widget => ({
                                    ...widget,
                                    ordered: !widget.ordered
                                }))
                        }}
                        checked={cachedWidget.ordered}
                        type="checkbox"
                    />
                    Ordered
                    <br/>
                    <textarea
                        onChange={(e) => {
                            setCachedWidget(
                                cachedWidget => ({
                                    ...cachedWidget,
                                    text: e.target.value}))
                            setEditingWidget(
                                widget => ({
                                    ...widget,
                                    text: e.target.value}))
                        }}
                        value={cachedWidget.text}
                        rows={10}
                        className="form-control"
                    />
                </>
            }
            {
                !editing &&
                <>
                    {
                        cachedWidget.ordered &&
                        <ol>
                            {
                                cachedWidget.text.split("\n").map((item) => {
                                    return (
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !cachedWidget.ordered &&
                        <ul>
                            {
                                cachedWidget.text.split("\n").map((item) => {
                                    return (
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </>
    )
}

export default ListWidget