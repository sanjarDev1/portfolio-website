import React, { useEffect, useState } from "react";
import db from "../firebase/config";

function Main() {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    db.collection("about-me").onSnapshot((snapshot) =>
      setAbout(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="about-info">
      {about.map((item, index) => (
        < div className="about-info2" key={index}>
          <img className="myImage" src={item.myImage} />
          <span>
            <p className="aboutText">{item.text}</p>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Main;
