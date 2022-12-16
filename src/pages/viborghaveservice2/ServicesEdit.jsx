import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import Error from "../../components/Error";
import { useParams, useNavigate } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import Loader from "../../components/Loader";
import usePutData from "../../hooks/usePutData";

const ServicesEdit = () => {
    const { iddd } = useParams();
    const navigate = useNavigate(); // så brugeren kan redirectes retur til adminsiden efter rettelse

    const { error, loading, data, getData } = useGetData();
    const { error: errorContents, loading: loadingContents, data: dataContents, getData: getDataContents } = useGetData();

    const { error: errorPut, loading: loadingPut, data: dataPut, putData } = usePutData();


    useEffect( () => {
        //kategorier, så man kan hente en anden kategori

        getDataContents( "http://localhost:5023/services" )

        //todo'en der skal rettes
        getData( "http://localhost:5023/services/" + iddd );
    }, [] );

    useEffect( () => {
        //hvis der er data fra put-requestet = færdig med at rette
        if ( dataPut ) {
            navigate( "/servicesAdmin" );
        }
    }, [ dataPut ] );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        let fd = new FormData( e.target )

        putData(
            "http://localhost:5023/services/admin/" + iddd, fd, null, null
        );
    }

    return (
        <div className="container">
            <Title headline="Ret i services" />

            { loading || ( loadingPut && <Loader /> ) }
            { error || ( errorPut && <Error /> ) }

            { data && (
                <form onSubmit={ handleSubmit }>
                    <label className="form-label me-3">
                        Ret service:
                        <input
                            type="text"
                            name="title"
                            defaultValue={ data.title }
                            className="form-control"
                        />
                    </label>


                    <div className='mb-3 mt-3'>
                        <label className='form-label me-3'>
                            Skriv content:
                            <input
                                type="text"
                                name="content"
                                defaultValue={ data.content }
                                className="form-control"
                            />

                        </label>
                    </div>

                    <div className='mb-3 mt-3'>
                        <label className='form-label me-3'>
                            Skriv content:
                            <input
                                type="file"
                                name="image"
                                className="form-control"
                            />

                        </label>

                    </div>

                    <button type="submit" className="btn btn-primary">
                        Ret service
                    </button>
                </form>
            ) }
        </div>
    );
};

export default ServicesEdit;
