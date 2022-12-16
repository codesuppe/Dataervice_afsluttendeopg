import React, { useState, useEffect } from 'react'
import Title from '../../components/Title';
import usePostData, { } from "../../hooks/usePostData"
import useGetData from '../../hooks/useGetData';
import Error from '../../components/Error';
import Loader from '../../components/Loader';

const ServicesCreate = () => {

    //hook opener til postdata
    const { error, loading, data, postData } = usePostData()
    const { error: errorCategory, loading: loadingCategory, data: dataCategory, getData } = useGetData();



    useEffect( () => {
        getData( "http://localhost:5023/services" )

    }, [] );

    /* useEffect( () => {
        if ( data ) setnewBoardgame( "" )
    }, [ data ] ) */




    //handlesubmit funktion - send data til api
    const handleSubmit = ( e ) => {
        e.preventDefault();

        let fd = new FormData( e.target )

        postData(
            "http://localhost:5023/services/admin/", fd, null, null
        );
    }

    return (
        <div className='Services container my-5 py-5 text-light'>

            <div className="titles text-center text-light">
                <h1 className="my-3 ">Tilbyd ny service</h1>
                <div className="container w-50">
                    <hr className="divider w-25 mx-auto" />
                    <p>Herunder kan du tilføje en ny service</p>
                </div>

            </div>

            { error && <Error /> }
            { loading && <Loader /> }

            { data && <h2>Din service er nu oprettet</h2> }

            <div className='row'>

                <div className='col'>

                    <form onSubmit={ handleSubmit }>
                        <div className='mb-3 mt-3'>
                            <label className='form-label me-3'>Skriv navnet på din service:
                                <input type="text" name="title" id="input" className='form-control' />
                            </label>
                        </div>
                        <div className='mb-3 mt-3'>
                            <label className='form-label me-3'>Beskriv din service:
                                <input type="text" name="content" id="input" className='form-control' />
                            </label>
                        </div>
                        <div className='mb-3 mt-3'>
                            <label className='form-label me-3'>Indsæt et billede:
                                <input type="file" name="image" id="input" className='form-control' />
                            </label>
                        </div>



                        <button type="submit" className='btn btn-primary'>Tilføj ny service</button>
                    </form>

                </div>


            </div>

        </div>
    )
}

export default ServicesCreate
