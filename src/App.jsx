import './App.css'
import 'bulma/css/bulma.min.css'

function App() {

  return (
    <>
    <div>
      SPLIT 
      <br/>
      TTER
      </div>
     <div className="hero has-background-white">
      <div className="columns has-text-left" style={{ width:"100%", marginLeft:"40px", marginTop:"20px"}}>
        Bill
        <div className='column has-background-black' style={{width:"80%", height:"40px", marginTop:"5px"}}>

        </div>
        <div style={{marginTop:"25px"}}>
        Select Tip %
        </div>
        <div className='columns is-mobile' style={{marginTop:"25px"}}>
        <div className='column is-size-4' style={{border:"solid"}}>5</div>
        <div className='column is-size-4'>5</div>
        <div className='column is-size-4'>5</div>
        <div className='column is-size-4'>5</div>
        </div>
      </div>
 
</div>

    </>
    )
}

export default App
