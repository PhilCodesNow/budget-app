import React from 'react';
import './OutputCategory.css';
import DeleteIcon from '@material-ui/icons/HighlightOff';


function OutputCategory(props) {
    const {
        category
    } = props
    return (
    <div className="outputCategory">
            <h1>{category.name}</h1>
            {
            category.items.map((item, index) => {
            return <div key={index} className="outputCategory__flex">
            <div className="outputCategory__flex__left">
                <div>{item.name}</div>
                <div>{item.price}</div>
            </div>
            <DeleteIcon></DeleteIcon>
            </div>
            })
            }
    </div>
    )
}

export default OutputCategory
