import React,{useState} from 'react'

export const AddTransation = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState();  
    return (
        <div>
            <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label>Transaction Name</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter transaction name..." />
        </div>
        <div className="form-control">
          <label
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      <p>Created by Noman Ishaq</p>
        </div>
    )
}
