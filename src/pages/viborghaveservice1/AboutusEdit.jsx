import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import Error from "../../components/Error";
import { useParams, useNavigate } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import Loader from "../../components/Loader";
import usePutData from "../../hooks/usePutData";

const AboutusEdit = () => {
    const { iddd } = useParams();
    const navigate = useNavigate(); // så brugeren kan redirectes retur til siden efter rettelse

    const { error, loading, data, getData } = useGetData();
    const { error: errorContents, loading: loadingContents, data: dataContents, getData: getDataContents } = useGetData();

    const { error: errorPut, loading: loadingPut, data: dataPut, putData } = usePutData();


    useEffect( () => {
        //kategorier, så man kan hente en anden kategori

        getDataContents( "http://localhost:5023/aboutus" )

        //content'en der skal rettes
        getData( "http://localhost:5023/aboutus" );
    }, [] );

    useEffect( () => {
        //hvis der er data fra put-requestet = færdig med at rette
        if ( dataPut ) {
            navigate( "/viborghaveservice1" );
        }
    }, [ dataPut ] );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        let fd = new FormData( e.target )

        putData(
            "http://localhost:5023/aboutus/admin/", fd, null, null
        );
    }

    return (
        <div className="container AboutusEdit">
            <Title headline="Ret i content" />

            { loading || ( loadingPut && <Loader /> ) }
            { error || ( errorPut && <Error /> ) }

            { data && (
                <form onSubmit={ handleSubmit }>
                  
                    <div className='mb-3 mt-3'>
                        <label className='form-label me-3 w-100'>
                            <h2>Skriv html-content:</h2>
                            <input
                                type="text"
                                name="content"
                                defaultValue={ data.content }
                                className="form-control"
                            />

                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Ret content
                    </button>
                </form>
            ) }
        </div>
    );
};

export default AboutusEdit;
