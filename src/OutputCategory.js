import React from 'react';
import './OutputCategory.css';
import DeleteIcon from '@material-ui/icons/HighlightOff';

function OutputCategory(props) {
    const {
        category
    } = props
    return (
        <div className="outputCategory">
            <h3>{category.name}</h3>
            {
                category.items.map(item => {
                    return (
                        <div className="outputCategory__flex">
                            <div className="outputCategory__flex__info">
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                            </div>
                            <div className="outputCategory__flex__button">
                                <DeleteIcon/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OutputCategory
