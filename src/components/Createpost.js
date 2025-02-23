import React from 'react'
import "./Createpost.css";

export default function Createpost() {

    const loadFile = (event)=>{
        var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
}

  return (
    <div className="createPost" >
<div className="post-header">
<h4 style={{margin:"3px auto"}}>Create New Post</h4>
<button id="post-btn">Share</button>
</div>
<div className="main-div" >
<img id="output" src="https://cdn-icons-png.flaticon.com/128/6499/6499530.png" alt="Hey Man !" />
    <input type="file" accept="image/*" onChange={(event)=>{loadFile(event)}} />  
</div>

<div className="details">
<div className="card-header">
    <div className="card-pic">
        <img src = "https://images.unsplash.com/photo-1628499636754-3162d34ca39c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D"
         alt=""/>
    </div>
    <h5>Richard Hendrich</h5>
</div>

<textarea type="text" placeholder="Write a caption..." ></textarea>

</div>
    </div>
  )
}
