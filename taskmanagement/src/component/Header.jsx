

const Header = () => {
  return (
    <div>
        <nav className="nav">
            <div className="nav-left">
                <h3>Codsoft Task:</h3>
                <p style={{display:"flex",justifyContent:"flex-start"}}>Project : <strong>#02</strong></p>
                
            </div>

            <div className="nav-right">
                <div className="tabs">
                    <h3 style={{color:"blue",fontFamily:"Lato"}}>Task Tracker <span style={{color:"whitesmoke",backgroundColor:"black"}}>Application </span></h3> 
                    

                </div>
               
            </div>
            
        </nav>


    </div>
  )
}

export default Header