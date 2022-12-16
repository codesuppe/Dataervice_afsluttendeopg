import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Title from "../../components/Title";
import { formatDistanceToNow } from "date-fns";
import { da } from "date-fns/locale";

//hook import
import useGetData from "../../hooks/useGetData";

//map import
import { initMap, changeMapView, removeMap } from "../../helpers/leaflet";

const Vejret = () => {
  //request-hook
  const { error, loading, data, getData } = useGetData();
  const {
    error: errorDAWA,
    leading: loadingDAWA,
    data: dataDAWA,
    getData: getDataDAWA,
  } = useGetData();

  //state til zip ID
  const [zip, setZip] = useState("8000");

  useEffect(() => {
    if (zip.length === 4 && !isNaN(zip)) {
      getData(
        "http://api.openweathermap.org/data/2.5/forecast?zip=" +
          zip +
          ",dk&units=metric&appid=" +
          process.env.REACT_APP_OPENWEATHERKEY
      );
    } else {
      getDataDAWA(
        "https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip
      );
    }
  }, [zip]);

  useEffect(() => {
    if (data) changeMapView([data.city.coord.lat, data.city.coord.lon]);
  }, [data]);

  useEffect(() => {
    initMap([56, 10]);
    return () => {
      removeMap(); // fjern kortet når component unmountes
    };
  }, []);

  return (
    <div className="Weather1 container">
      <Title headline="Vejret - indtast postnummer" />




      {/* Eroor */}
      {error && <Error />}

      {/* Loading */}
      {loading && <Loader />}


      <div className="col-12 mb-5 text-center">
          <input
            type="text"
            list="addresssuggestion"
            placeholder="indtast et postnummer"
            onInput={(e) => setZip(e.target.value.substring(0, 4))}
            defaultValue={zip}
          />
          <datalist id="addresssuggestion">
            {dataDAWA &&
              dataDAWA.map((a) => (
                <option value={a.tekst} key={a.postnummer.nr} />
              ))}
          </datalist>
        </div>
        <div
          className="mx-auto"
          id="mapcontainer"
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "whitesmoke",
          }}
        ></div> 
      <div className="row row-cols-1 row-cols-md-5">
        

        {data &&
          data.list.map((o, i) => (
            
              <div className="card bg-dark text-light cap-first col-4 col-md-4  text-center" key={"weather" + i}>
                <div className="card-body" >
                  <div className="card-title">
                    <h3 className="display-6 p-2 font-weight-bold">
                      Vejret i {data.city.name}
                    </h3>
                    <p>
                      {new Date(o.dt_txt).toLocaleString("da-dk", {
                        weekday: "long",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <div className="container card-body p-3">
                    <p className="cap-first">
                      Temperatur: {Math.round(o.main.temp)}&#8451;
                    </p>
                    <p className="cap-first">Vind: {o.wind.speed} m/s</p>
                    <p>
                      {new Date(data.city.sunrise * 1000).toLocaleString(
                        "da-DK",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </p>
                    <p>
                      {new Date(data.city.sunset * 1000).toLocaleString(
                        "da-DK",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </p>

                    <img
                      className="logo img-fluid"
                      src={
                        "http://openweathermap.org/img/wn/" +
                        o.weather[0].icon +
                        ".png"
                      }
                    />
                  </div>
                </div>
              </div>
           
          ))}
        
      </div>
    </div>
  );
};

export default Vejret;
