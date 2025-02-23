import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div className = "home">
      <div className="card">
        {/* {Card Header}  */}

      <div className="card-header">
        <div className= "card-pic">
          <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt = ""/>
        </div>
        <h5>Richard</h5>
      </div>

      <div className="card-image">
        <img src ="https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt= "" />
      </div>

      <div className="card-content">
      <span className="material-symbols-outlined">
favorite
</span>
<p>1 Like</p>
<p>This is amazing.</p>
      </div>

      <div className="add-comment">
      <span className="material-symbols-outlined">mood</span>
      <input type="text" placeholder="Add a comment" />
      <button className="comment" >Post</button>
      </div>
        </div>
    </div>
  )
}
