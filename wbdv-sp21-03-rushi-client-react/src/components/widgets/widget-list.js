import {useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import {connect} from "react-redux";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";
import widgetActions from "../../actions/widget-actions";

const WidgetList = (
    {
        widgets = [],
        findWidgetsForTopic,
        createWidgetForTopic,
        updateWidget,
        findAllWidgets,
        deleteWidget
    }) => {
    const {layout, courseId, moduleId, lessonId, topicId, wid} = useParams();

    const [editingWidget, setEditingWidget] = useState(false)

    useEffect(() => {
        if(topicId !== "undefined" && typeof topicId !== "undefined" && lessonId !== "undefined" && typeof lessonId !== "undefined" && moduleId !== "undefined" && typeof moduleId !== "undefined") {
            console.log("LOAD WIDGETS FOR TOPIC: " + topicId)
            findWidgetsForTopic(topicId)
            }
        }, [topicId]);

    return (
        topicId !== "undefined" && typeof topicId !== "undefined" && lessonId !== "undefined" && typeof lessonId !== "undefined" && moduleId !== "undefined" && typeof moduleId !== "undefined" &&
        <div className="container-fluid">
            <i className="btn fas fa-plus btn-primary float-right" onClick={() => createWidgetForTopic(topicId)}/>
            <h2>Widget List</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget.id, editingWidget)
                                        setEditingWidget(false)
                                    }}
                                       className="btn btn-secondary fas fa-check float-right"/>
                                    <i onClick={() => deleteWidget(widget.id)}
                                       className="btn btn-secondary fas fa-trash float-right mr-2"/>
                                </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                <i onClick={() => setEditingWidget(widget)}
                                   className="btn btn-secondary fas fa-cog float-right"/>
                            }
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}
                                    setEditingWidget={setEditingWidget}
                                />
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}
                                    setEditingWidget={setEditingWidget}
                                />
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}
                                    setEditingWidget={setEditingWidget}
                                />
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}
                                    setEditingWidget={setEditingWidget}
                                />
                            }
                        </li>
                    )
                }
            </ul>
            {/*{JSON.stringify(widgets)}*/}
        </div>

    )
}

const mapStateToProps = state => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // pass dispatch to the Actions to maintain separately
        createWidgetForTopic: (topicId) => widgetActions.createWidgetForTopic(dispatch, topicId),
        deleteWidget: (wid) => widgetActions.deleteWidget(dispatch, wid),
        updateWidget: (wid, widget) => widgetActions.updateWidget(dispatch, wid, widget),
        findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch, topicId)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetList);