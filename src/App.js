import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setname]=useState('');
const [amount,setamount]=useState('');
const [mode,semode]=useState('');
const [remark,setremark]=useState('');
const [data,setdata1]=useState([]);
function name1(e){
setname(e.target.value);
console.log(e.target.value);
}
function amount1(e){
setamount(e.target.value);
}
function mode1(e){
semode(e.target.value);
console.log(e.target.value);
}

function remark1(e){
setremark(e.target.value);
}


function put(){
  setdata1([...data,{name:name,amount:amount,payment:mode,remark:remark}]);
  setname('');
  setamount('');
  setremark('');
}
function cancel(){
  setname('');
  setamount('');
  setremark('');
}
  return (

   
    <div className="App">
<div class="container-fluid" style={{marginTop:'15px'}}>
  <div className='row'>
<div className='col-5' style={{marginLeft:'10px'}}> 
<h6 style={{textDecoration:"underline"}}>Receipt Detail</h6>
</div>
  </div>
</div>
<div className='row'>
<div className='col-1 offset-2'>
<p style={{fontSize:'20px',textAlign:'left'}}>Date<span style={{color:'red'}}>*</span></p>

</div>
<div className='col-3 offset-2'>

<div class="input-group " >
  <input type="text" class="form-control" placeholder="Enter Date" aria-label="Username" aria-describedby="basic-addon1" style={{height:'30px'}} onChange={name1} value={name}/>
</div>
</div>
</div>
<div className='row'>
<div className='col-1 offset-2'>
<p style={{fontSize:'20px',textAlign:'left'}}>Amount<span style={{color:'red'}}>*</span></p>

</div>
<div className='col-6 offset-2'>

<div className="input-group " >
  <input type="text" class="form-control" placeholder="Enter Amount (in INR)" aria-label="Username" aria-describedby="basic-addon1" style={{height:'30px',width:'100px'}} onChange={amount1} value={amount}/>
</div>
</div>
</div>
<div className='row'>
<div className='col-1 offset-2'>
<p style={{fontSize:'20px',textAlign:'left'}}>Payment<span style={{color:'red'}}>*</span></p>

</div>
<div className='col-3 offset-2'>

<div className="input-group " >
<select className="form-select" aria-label="Default select example" onChange={mode1}>
<option value="" >Please Select Mode</option>
  <option value="Cash" >Cash</option>
  <option value="UPI">UPI</option>
  <option value="Bank Transfer">Bank Transfer</option>
</select>
</div>
</div>
</div>
<div className='row'>
<div className='col-1 offset-2'>
<p style={{fontSize:'20px',textAlign:'left'}}>Remark</p>

</div>
<div className='col-3 offset-2'>

<div className="input-group " >
  <input type="text" class="form-control" placeholder="Enter Remark" aria-label="Username" aria-describedby="basic-addon1" style={{height:'30px'}} onChange={remark1} value={remark}/>
</div>
</div>
</div>

<div className='row'>
<div className='col-1 offset-5'>
<button type="button" class="btn btn-outline-danger" onClick={cancel}>Cancel</button>
</div>
<div className='col-1 offset-1'>
<button type="button" class="btn btn-success" onClick={put}>Submit</button>
</div>


</div>
<div  style={{marginTop:'10px'}}>
<table className='table' style={{border:'2px solid black'}}>
<tr style={{border:'2px solid black'}}>
  <th style={{border:'1px solid black'}}>Name</th>
  <th style={{border:'1px solid black'}}>Amount</th>
  <th style={{border:'1px solid black'}}>Payment</th>
  <th style={{border:'1px solid black'}}>Remark</th>
</tr>
    {data.map( (value,index)=>
       (

<tr style={{border:'2px solid black'}}>
<td  key={index} style={{border:'1px solid black'}}>{value.name}</td>
<td  key={index} style={{border:'1px solid black'}}>{value.amount}</td>
<td  key={index} style={{border:'1px solid black'}}>{value.payment}</td>
<td  key={index} style={{border:'1px solid black'}}>{value.remark}</td>
</tr>
        

           
       )
       )}
</table>
</div>
    </div>

   
  );
}

export default App;
