import React from "react";

const ViborghaveserviceCard = ({t}) => {
  return (
    <div className="card bg-light h-100 text-center m-3" style={{border: "none"}} >
      <div className="card-body">
      <img className="img-fluid" src={"http://localhost:5023/images/" + t.image} />
        <h2>{t.title}</h2>
        <p> {t.content}</p>
        
        
      </div>
    </div>
  );
};

export default ViborghaveserviceCard;
