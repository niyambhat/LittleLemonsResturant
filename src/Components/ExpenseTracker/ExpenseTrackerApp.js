import React,{useReducer} from 'react'
const reducer=(state, action)=>{
    if(action.type === "buy_ingredients") return {money:state.money -10}
    if(action.type === "sell_a_meal") return {money:state.money +10}
}
function ExpenseTrackerApp() {
const initialState ={money:100}
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>Wallet: {state.money}</h1>
        <div>
            <button onClick={()=>dispatch({type:"buy_ingredients"})}>Shopping for veggie</button>
            <button onClick={()=>dispatch({type:"sell_a_meal"})}>Shopping for veggie</button>
        </div>
    </div>
  )
}

export default ExpenseTrackerApp