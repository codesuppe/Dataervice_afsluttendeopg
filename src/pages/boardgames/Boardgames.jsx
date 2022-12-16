import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";

import useGetData from "../../hooks/useGetData";
import Title from "../../components/Title";
import BoardgameCard from "./BoardgameCard";

const Boardgames = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "https://api.airtable.com/v0/appelw4DFg7HS9Tky/boardgametable",
            { "Authorization": "Bearer " + process.env.REACT_APP_AIRTABLEKEY } )

    }, [] )

    return (

        <div className="Brætspil container">

            <div>
                <Title headline="Brætspil" />

                {/* Eroor */ }
                { error && <h4>Ingen brætspil her</h4> }

                {/* Loading */ }
                { loading && <Loader /> }


                <div className="row row-cols-1 row-cols-md-3 g-2">

                    { data &&
                    
                    data.records.map( ( t ) => 
                    <div className="col" key={ t.id }>

                        <BoardgameCard t={t} />

                    </div>
                     )}

                </div>
            </div>
        </div>
    )


}

export default Boardgames;