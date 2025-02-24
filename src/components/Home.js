import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("./signup");
    }

    fetch("http://localhost:5000/getAllPosts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      {data.map((posts) => {
        return (
          <div className="card">
            {/* {Card Header}  */}

            <div className="card-header">
              <div className="card-pic">
                <img
                  src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
              </div>
              <h5>{posts.postedBy.name}</h5>
            </div>

            <div className="card-image">
              <img
                src={posts.photo}
                alt=""
              />
            </div>

            <div className="card-content">
              <span className="material-symbols-outlined">favorite</span>
              <p>1 Like</p>
              <p>{posts.body}</p>
            </div>

            <div className="add-comment">
              <span className="material-symbols-outlined">mood</span>
              <input type="text" placeholder="Add a comment" />
              <button className="comment">Post</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
