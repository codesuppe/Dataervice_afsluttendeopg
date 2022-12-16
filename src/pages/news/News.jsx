import React from "react";
import Loader from "../../components/Loader";
import Title from "../../components/Title";
import Error from "../../components/Error";
import {formatDistanceToNow} from 'date-fns'
import {da} from 'date-fns/locale'



import { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";

const News = () => {
  const { error, loading, data, getData } = useGetData();

  //states
  const [search, setSearch] = useState("FIFA");
  const [language, setLanguage] = useState("da");
  

  //søgning
  useEffect(() => {
    callAPI();
  }, []);

  // søg - kald api
  const handleSubmit = (e) => {
    e.preventDefault(); //forhindrer reload
    callAPI();
  };

  //api-url
  const callAPI = () => {
    getData(
      "https://newsapi.org/v2/everything?q=bitcoin&" + 
        search + 
        "&language=" + 
        language +
        "&apiKey=" +
        process.env.REACT_APP_NEWSAPIKEY
    );
  };

  return (
    <div className="news container">
      <Title headline="News - search" />

      {loading && <Loader />}
      {error && <Error />}

      <div className="row mb-5">
        <form onSubmit={handleSubmit}>
          {/* SØGNING - SØGEORD */}
          <div className="col-6 mb-3 mt-3">
            <input className="form-control"
              type="text"
              defaultValue={search}
              onInput={(e) => setSearch(e.target.value)}
            />
          </div>

          <div
            className="col-6 mb-3 mt-3"
            onChange={(e) => setLanguage(e.target.value)}
          >
            <select defaultValue={language} className="form-select">
              <option>da</option>
              <option>en</option>
              <option>de</option>
              <option>es</option>
              <option>it</option>
            </select>
          </div>

          {/* Country - vælg et land */}

          
          <button>Søg</button>

          <div className="mt-3">
          
          {
          /* data && <p>Matches: {data.totalResults}</p> */
          
          data?.articles.length ? <p>Antal matches: {data.totalResults}</p> : <p>Desværre ingen matches</p>

        
          }


          </div>
          
        </form>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-2">

        

        {data &&
          data.articles.map((a, i) => (
            <div className="col" key={"news" + i}>
              <div className="card h-100">

                
                {
                  a.urlToImage ? <img src={a.urlToImage} alt={a.title} className="card-img-top"/> 
                  : <img src ="https://via.placeholder.com/200x100" alt="placeholder" className="card-img-top" />
                }


                <div className="card-body">
                  <div className="title">
                    <h4>{a.title}</h4>
                    <p><small className="text-muted">{new Date(a.publishedAt).toLocaleString("da-dk", {year: "numeric", month:"long", day: "numeric", hour: "2-digit", minute: "2-digit"})}</small></p>
                    
                    <p className="text-muted "><em>Af {a.author}</em></p>
                  </div>
                  <div className="card-text">
                    <p>{a.description}</p>
                    <p>
                      <a href={a.url} target="_blank" rel="noreferrer">
                        Læs mere
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default News;
