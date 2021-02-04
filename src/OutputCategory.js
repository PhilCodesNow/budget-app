import React from 'react';
import './OutputCategory.css';
import DeleteIcon from '@material-ui/icons/HighlightOff';

function OutputCategory(props) {
    const {
        category,
        handleDeleteCategoryItem
    } = props
    return (
        <div className="outputCategory">
            <h3>{category.name}</h3>
            {
                category.items.map((item, index) => {
                    return (
                        <div className="outputCategory__flex" key={index}>
                            <div className="outputCategory__flex__info">
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                            </div>
                            <div className="outputCategory__flex__button">
                                <DeleteIcon
                                onClick={() => handleDeleteCategoryItem(category.id, index)}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OutputCategory
