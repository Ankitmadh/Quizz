function Nav(prop){
    
    return(

        <div className="card" style={{width: '18rem'}}>
        <img src={prop.image}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prop.name}</h5>
          <p className="card-text">{prop.detai}</p>
         
        </div>
      </div>
    );

}
export default Nav;