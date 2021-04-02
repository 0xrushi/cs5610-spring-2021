import React, {useState} from 'react';
import TypeSelector from "./type-selector";

const ParagraphWidget = (
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
                    <textarea
                        onChange={(e) => {
                            // set local cache to render immediately
                            setCachedWidget(
                                cachedWidget => ({...cachedWidget, text: e.target.value}))
                            setEditingWidget(
                                widget => ({...widget, text: e.target.value}))
                        }}
                        value={cachedWidget.text}
                        className="form-control"/>
                </>
            }
            {
                !editing &&
                <p>
                    {cachedWidget.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget