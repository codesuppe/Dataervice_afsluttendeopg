import React from "react";

const ServicesCard = ({t}) => {
  return (
    <div className="card h-100 Services text-light text-center">
      <div className="card-body">
      <img className="img-fluid rounded-circle" src={"http://localhost:5023/images/" + t.image} />
        <h2>{t.title}</h2>
        <p> {t.content}</p>
        
        
      </div>
    </div>
  );
};

export default ServicesCard;
