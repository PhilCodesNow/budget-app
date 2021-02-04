import React from 'react';
import "./Output.css";
import OutputCategory from './OutputCategory';



function Output(props) {
    const {
        budgetItems, 
        setBudgetItems,
        budgetCategories,
        handleDeleteCategoryItem
    } = props
    // let [newBudgetItems, setNewBudgetItems] = useState([...budgetItems])


    // let deleteBudgetItem = (i) =>{
    //     console.log(i)
    //     budgetItems.splice(i, 1)
    //     setBudgetItems(prevBudgetItems =>{
    //         return [...prevBudgetItems]
    //     })
    // }

    // let totalPrice = 0
    // budgetItems.map(item =>{
    //     const currentPrice = parseInt(item.price) + totalPrice
    //     totalPrice = currentPrice
    // })

    // function makeHoverClass(e){
    //     document.getElementsByClassName('output__item__delete > MuiSvgIcon-root').style.display = 'block';
    // }
    // function leaveHoverClass(e){
    //     e.target.style.background = 'white'
    // }

    return (
        <div className="output">
    {
        budgetCategories.map((category, index) =>{
            return <OutputCategory
                    key={index}
                    category={category}
                    handleDeleteCategoryItem={handleDeleteCategoryItem}
                    />
        })
    }
        {/* {
            budgetItems.map((Item, index) =>{
                return <div className="output__item">
                            <div className="output__item__box"
                            // onMouseEnter={makeHoverClass}
                            // onMouseLeave={leaveHoverClass}
                        >
                                <div className="output__item__name"
                                key={index}
                                >
                                    <div>{Item.name}</div>
                                </div>
                                <div className="output__item__price"
                                key={index}
                                >
                                    <div>{Item.price}</div>
                                </div>
                            </div>
                            <div className="output__item__delete">
                                <HighlightOffIcon onClick={deleteBudgetItem.bind(deleteBudgetItem, index)} />
                            </div>

                        </div>
            })
        } */}
            <div className="output__total">
                {/* <h1>Monthly Spending: {totalPrice}</h1> */}

            </div>
        </div>
    )
}

export default Output
