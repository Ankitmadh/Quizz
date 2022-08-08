import { useEffect, useState } from 'react';
import Nav from './Nav';


function News(){
    const[data,setdata]=useState([]);
    const[opt,setopt]=useState([])
    const[optt,setoptt]=useState([]);
    const [vv,setvv]=useState([]);
    const [correct,setcorrect]=useState("");
    const [check,setcheck]=useState("")
    const ww=optt;
    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

    useEffect(()=>{
        jj()
    },[]);

   
   function submi(){
    var d=document.getElementById('kdw');
  
    if(correct.toLowerCase()==d.value.toLowerCase()){
        alert("Your answer is correct");
        jj();
        d.value="";
    }else if(d.value==""){
        alert('Please enter text')
    }else{
        alert('Your answer is Incorrect')
    }
   }
    

    function jj(){
        setoptt([]);
        fetch('https://opentdb.com/api.php?amount=1').then((result)=>{
            result.json().then((ge)=>{
           setdata(ge.results);
           
         

           ge.results.map((ee)=>{
            ee.incorrect_answers.map((as)=>{
                setoptt(optt=>[...optt,as]);
            })
            setoptt(optt=>[...optt,ee.correct_answer]);
            setcorrect(ee.correct_answer);
           
           
           })
        


            })
            

            
          }
          )  
        
     

         
    }

    function zx(e){
setcheck(e.target.value);

    }

    const newList = shuffle(optt);
     const kq= newList.map((hh)=>
     <div className='col-md-6'  key={hh}><h6 style={{color:'white'}}>{hh}</h6></div>
     )

    return(
      
       <div className='container' style={{marginTop:'30px'}}>
<div className='row'>

    
<div className='col-md-4 offset-md-4' style={{textAlign:'center',borderColor:'black',borderStyle:'solid',borderWidth:'2px',padding:'30px',borderRadius:'20px',backgroundColor:'black'}}>


{
    data.map((ccc)=>
        <div key={ccc.question} >
            <h6 dangerouslySetInnerHTML={{__html: `${ccc.question}`}} style={{color:'yellow'}}></h6>
            <div className='container'>
            <div className='row'>
             {
               kq
             }
          
             
            </div>
            </div>
            </div>

          
    )
}

            <input type="text" className="form-control"  placeholder="Enter Answer here..."  onChange={(e) => setcheck()} id='kdw'  style={{marginTop:'10px'}}/>
            <button type="button" className="btn btn-success" style={{marginTop:'10px'}} onClick={submi}>Submit</button>
               
</div>

</div>
</div>

    );

}
export default News;