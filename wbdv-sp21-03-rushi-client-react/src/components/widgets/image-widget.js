import React, {useState} from 'react'
import TypeSelector from "./type-selector";

const ImageWidget = (
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

                    <br/>
                    <label>Image URL</label>
                    <input type="text" value={cachedWidget.src} className="form-control image-input"
                           onChange={(e) => {
                               setCachedWidget(
                                   cachedWidget => ({
                                       ...cachedWidget,
                                       src: e.target.value
                                   }))
                               setEditingWidget(
                                   widget => ({
                                       ...widget,
                                       src: e.target.value
                                   }))
                           }}
                    />
                    {/*update Width*/}
                    <label>Image Width</label>
                    <input type="text" value={cachedWidget.width}
                           className="form-control image-input"
                           onChange={(e) => {
                               setCachedWidget(
                                   cachedWidget => ({
                                       ...cachedWidget,
                                       width: e.target.value
                                   }))
                               setEditingWidget(
                                   widget => ({
                                       ...widget,
                                       width: e.target.value
                                   }))
                           }}
                    />
                    {/*update Height*/}
                    <label>Image Height</label>
                    <input type="text" value={cachedWidget.height}
                           className="form-control image-input"
                           onChange={(e) => {
                               setCachedWidget(
                                   cachedWidget => ({
                                       ...cachedWidget,
                                       height: e.target.value
                                   }))
                               setEditingWidget(
                                   widget => ({
                                       ...widget,
                                       height: e.target.value
                                   }))
                           }}
                    />
                    {/*{JSON.stringify(cachedWidget)}*/}
                </>
            }
            {
                !editing &&
                <>
                    <img width={widget.width} height={widget.height} src={widget.src}/>
                </>
            }
        </>
    )
}

export default ImageWidget