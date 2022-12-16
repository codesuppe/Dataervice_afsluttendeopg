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

const BoardgamesAdmin = () => {
  const { error, loading, data, getData } = useGetData();
  const {
    error: errordelete,
    loading: loadingdelete,
    data: datadelete,
    deleteData,
  } = useDeleteData();

  useEffect(() => {
    getData("https://api.airtable.com/v0/appelw4DFg7HS9Tky/boardgametable", {
      "Authorization": "Bearer " + process.env.REACT_APP_AIRTABLEKEY
    });
  }, [datadelete]); // abonnerer på ændringer i datadelete-state (fra delete hook) og henter nye data ved ændringer

  //handledelete
  
  const handleDelete = (id) => {
    console.log(id);

    if (window.confirm("Er du sikker på at du vil slette?" )) {
      deleteData(
        "https://api.airtable.com/v0/appelw4DFg7HS9Tky/boardgametable/" + id,
        { Authorization: "Bearer " + process.env.REACT_APP_AIRTABLEKEY }
      );
    }
  };

  return (
    <div className="boardgame container">
      <div>
        <Title headline="Administér brætspil" />

        {/* Eroor */}
        {(error || errordelete) && <Error  />}

        {/* Loading */}
        {(loading || loadingdelete) && <Loader />}

        <div className="row row-cols-1 row-cols-md-4 g-2">
          {data &&
            data.records.map( (t) => 
              <div className="card" key={t.id}>
               
                <div className="card-body">
                  <h2>{t.fields.name}</h2>
                
                  <p>{t.fields.categoryname}</p>
                </div>
                <div className="card-footer">
                  <Link>
                    <button 
                      onClick={() => handleDelete ( t.id )}                     
                      className="btn btn-secondary btn-danger me-2"
                    >
                      SLET <AiOutlineDelete />
                    </button>
                  </Link>

                  <Link to={"/boardgamesEdit/" + t.id}>
                    <button className="btn btn-warning">
                      RET <AiOutlineEdit />
                    </button>
                  </Link>
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default BoardgamesAdmin;
