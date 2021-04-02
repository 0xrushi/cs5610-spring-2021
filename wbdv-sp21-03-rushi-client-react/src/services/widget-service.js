// const BASE_URL = "https://wbdv-rushi-spring-server.herokuapp.com/";

const WIDGET_URL = "http://localhost:8080"

export const createWidget = (tid, widget) =>
    fetch(`${WIDGET_URL}/api/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`${WIDGET_URL}/api/topics/${tid}/widgets`)
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(`${WIDGET_URL}/api/widgets`)
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/api/widgets/${wid}`,{
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createWidget,
    findWidgetsForTopic,
    updateWidget,
    findAllWidgets,
    deleteWidget
}

export default api