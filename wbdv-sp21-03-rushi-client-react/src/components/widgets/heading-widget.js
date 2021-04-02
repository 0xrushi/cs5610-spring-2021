import React, {useState} from 'react'
import TypeSelector from "./type-selector";

const HeadingWidget = (
    {
        widget,
        editing,
        setEditingWidget,
    }) => {
    // const [editing, setEditing] = useState(false)
    // const [headingSelected, setHeadingSelected] = useState(false)
    const [cachedWidget, setCachedWidget] = useState(widget)
    let headingmenu = <></>

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
                            // set local cache to render immediately
                            setCachedWidget(
                                cachedWidget => ({...cachedWidget, text: e.target.value}))
                            setEditingWidget(
                                widget => ({...widget, text: e.target.value}))
                        }}
                        value={cachedWidget.text}
                        className="form-control"/>
                    <select
                        onChange={(e) => {
                            setCachedWidget(
                                cachedWidget => ({...cachedWidget, size: parseInt(e.target.value)}))
                            setEditingWidget(
                                widget => ({...widget, size: parseInt(e.target.value)}))
                        }}
                        value={cachedWidget.size}
                        className="mt-2 form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </>
            }
            {
                !editing &&
                <>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </>
            }
        </>
    );
}

export default HeadingWidget
