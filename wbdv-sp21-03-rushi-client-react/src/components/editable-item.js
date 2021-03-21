import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)
    return(
        <>
            {
                !editing &&
                <div className ={`nav-link ${active ? "active":""}`}>
                    <Link to={to} style={{color:"white"}}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="btn btn-secondary fas fa-edit ml-2"></i>
                </div>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title} style={{marginRight: "5px"}}/>
                        <>
                            <i onClick={() => {
                                setEditing(false)
                                updateItem(itemCache)
                            }} className="btn btn-secondary fas fa-check" style={{marginRight: "5px"}}></i>
                            <i onClick={() => deleteItem(item)} className="btn btn-secondary fas fa-times"></i>
                        </>
                </>
            }
        </>
    )
}

export default EditableItem