import React from 'react'
import "./Profile.css"

export default function Profile() {
  return (
    <div className="profile" >
      {/* Profile Frame */}

<div className="profile-frame">
      <div className="profile-pic">
        <img src="https://images.unsplash.com/photo-1628499636754-3162d34ca39c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D" 
        alt="" />
      </div>

      <div className="profile-data">
        <h1>Richard Hendrick</h1>
        <div className="profile-info" style={{display: "flex" }}>
          <p>40 posts</p>
          <p>237 Followers</p>
          <p>37 Following</p>
        </div>
      </div>


</div>
<hr style={{width:"90%", marin:"auto", opacity:"0.8", margin:"25px auto"}}/>
<div className="gallery">
  <img src="https://images.unsplash.com/photo-1628499636754-3162d34ca39c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D" 
  alt="" />
  <img src="https://images.unsplash.com/photo-1628499636754-3162d34ca39c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D" 
  alt="" />
  <img src="https://images.unsplash.com/photo-1628499636754-3162d34ca39c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D" 
  alt="" />
  <img src="https://images.unsplash.com/photo-1628499636754-3162d34ca39c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D" 
  alt="" />
  <img src="https://images.unsplash.com/photo-1628499636754-3162d34ca39c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D" 
  alt="" />
  <img src="https://images.unsplash.com/photo-1628499636754-3162d34ca39c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D" 
  alt="" />
</div>

    </div>
  )
}
