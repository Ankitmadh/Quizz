import { useEffect, useState } from 'react';
import Nav from './Nav';


function News(){
    const[data,setdata]=useState([]);
    const[opt,setopt]=useState([])
    const[optt,setoptt]=useState([]);
    const ww=optt;
    useEffect(()=>{
      fetch(' https://opentdb.com/api.php?amount=1').then((result)=>{
        result.json().then((ge)=>{
       setdata(ge.results);
   
    
        })
      })
    },[]);

   
    

    function jj(){
        fetch(' https://opentdb.com/api.php?amount=1').then((result)=>{
            result.json().then((ge)=>{
           setdata(ge.results);
           data.map((item)=>{
            setoptt(item.incorrect_answers);
            setopt([item.correct_answer]);
            setoptt(opt);
        
        })

    data.map((yy)=>{
        console.log(yy.incorrect_answers);
        console.log(yy.correct_answer);
        
        

       
  
   }
    )

    
    
        
            })

            
          })  

         
    }

    return(

       <div className='container'>
<div className='row'>
    <button onClick={jj}>Get Value</button>
{
   optt.map((item)=>

    <div>
 <h1 key={item}>{item}</h1>


    </div>
    )
}



</div>
</div>

    );



}
export default News;