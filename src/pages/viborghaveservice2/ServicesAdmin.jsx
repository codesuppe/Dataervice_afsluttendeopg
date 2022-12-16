import React, { useState, useEffect } from "react";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";

//hooks import
import useDeleteData from "../../hooks/useDeleteData";
import useGetData from "../../hooks/useGetData";

//import icons
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ServicesAdmin = () => {
  const { error, loading, data, getData } = useGetData();
  const {
    error: errordelete,
    loading: loadingdelete,
    data: datadelete,
    deleteData,
  } = useDeleteData();

  useEffect(() => {
    getData("http://localhost:5023/services");
  }, [datadelete]); // abonnerer på ændringer i datadelete-state (fra delete hook) og henter nye data ved ændringer

  //handledelete
  
  const handleDelete = (id) => {
    console.log(id);

    if (window.confirm("Er du sikker på at du vil slette "+ id + "?")) {
      deleteData(
        "http://localhost:5023/services/admin/" + id
      );
    }
  };

  return (
    <div className="Services container  my-5 py-5 text-light">
      <div>
        <Title headline="Administér Services" />

        {/* Eroor */}
        {(error || errordelete) && <Error  />}

        {/* Loading */}
        {(loading || loadingdelete) && <Loader />}

        <div className="row row-cols-1 row-cols-md-4 g-2 text-dark">
          {data &&
            data.map((t) => (
              <div className="card" key={t.title}>
               
                <div className="card-body">
                  <h2>{t.title}</h2>
                
                  <p>{t.content}</p>
                </div>
                <div className="card-footer">
                  <Link>
                    <button 
                      onClick={() => handleDelete ( t._id )}                     
                      className="btn btn-secondary btn-danger me-2"
                    >
                      SLET <AiOutlineDelete />
                    </button>
                  </Link>

                  <Link to={"/servicesEdit/" + t._id}>
                    <button className="btn btn-warning">
                      RET <AiOutlineEdit />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAdmin;
