import React, { useState, useEffect } from "react";
import "./Createpost.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Createpost() {
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const navigate = useNavigate()

        const notifyA = (msg) => toast.error(msg);
        const notifyB = (msg) => toast.success(msg);

  useEffect(()=>{
//saving post to mongodb
if(url){
  fetch("http://localhost:5000/createPost",{
    method:"Post",
    headers:{
      "Content-Type":"Application/json",
    "Authorization":"Bearer " + localStorage.getItem("jwt")
  },
    body:JSON.stringify({
      body, 
      image:url
    })
    }) .then(res=>res.json())
    .then(data=>{if(data.error){
      notifyA(data.error)
    }
  else{
    notifyB(" Successfully Posted.")
    navigate("/")
  }})
    .catch(err => console.log(err))
}
}, [url]) 

  //posting image to cloudinary
  const postDetails = ()=>{
    console.log(body, image)
    const data = new FormData();
    data.append("file",image)
    data.append("upload_preset", "Insta-clone-react")
    data.append("cloud_name", "bansalcloud")
    fetch("https://api.cloudinary.com/v1_1/bansalcloud/image/upload",{
      method:"Post",
      body:data
    }). then(res => res.json())
    .then(data=>setUrl(data.url))
    .catch(err=>console.log(err))
  }

  const loadFile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

  return (
    <div className="createPost">
      <div className="post-header">
        <h4 style={{ margin: "3px auto" }}>Create New Post</h4>
        <button id="post-btn" onClick={()=>{postDetails()}}>Share</button>
      </div>
      <div className="main-div">
        <img
          id="output"
          src="https://cdn-icons-png.flaticon.com/128/6499/6499530.png"
          alt="Hey Man !"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            loadFile(event);
            setImage(event.target.files[0]);
          }}
        />
      </div>

      <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img
              src="https://images.unsplash.com/photo-1628499636754-3162d34ca39c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D"
              alt=""
            />
          </div>
          <h5>Richard Hendrich</h5>
        </div>

        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          type="text"
          placeholder="Write a caption..."
        ></textarea>
      </div>
    </div>
  );
}
