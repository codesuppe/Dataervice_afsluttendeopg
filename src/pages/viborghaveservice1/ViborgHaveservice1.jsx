import React, { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

import ViborghaveserviceCard from "./ViborghaveserviceCard";
import Services from "../viborghaveservice2/Services";

import Loader from "../../components/Loader";

const ViborgHaveservice1 = () => {
  const navigate = useNavigate();
  const { error, loading, data, getData } = useGetData();
  const {
    error: errorabout,
    loading: loadingabout,
    data: dataabout,
    getData: getDataAbout,
  } = useGetData();

  useEffect(() => {
    getData("http://localhost:5023/services");
  }, []);

  useEffect(() => {
    getDataAbout("http://localhost:5023/aboutus");
  }, []);

  const handleClick = (e) => {
    navigate("/Services");
  };

  return (
    <div className="bg-light p-5">
      {/* Eroor */}
      {error && <h4>Ingen services her</h4>}

      {/* Loading */}
      {loading && <Loader />}

      <div className="row row-cols-1 row-cols-md-3 g-2">
        {dataabout && (
          <div>
            <h1>{parse(dataabout.title)}</h1>
            <hr className="divider w-25 " />
            <div>{parse(dataabout.content)}</div>
          </div>
        )}
        {data &&
          data.slice(0, 2).map((t) => (
            <div className="col" key={t._id}>
              <ViborghaveserviceCard t={t} />
            </div>
          ))}
      </div>
      <button
        onClick={handleClick}
        className="btn"
        style={{ background: "#6AAF09", color: "white" }}
      >
        SE ALLE YDELSER
      </button>
    </div>
  );
};

export default ViborgHaveservice1;
