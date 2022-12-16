import React, { useState, useEffect } from 'react'
import Title from '../../components/Title';
import usePostData, { } from "../../hooks/usePostData"
import useGetData from '../../hooks/useGetData';
import Error from '../../components/Error';
import Loader from '../../components/Loader';

const BoardgameCreate = () => {

    //hook opener til postdata
    const { error, loading, data, postData } = usePostData()
    const { error: errorCategory, loading: loadingCategory, data: dataCategory, getData } = useGetData();

    //state til det nye todo
    const [ newBoardgame, setnewBoardgame ] = useState( "" );
    const [ category, setCategory ] = useState();


    useEffect( () => {
        getData( "https://api.airtable.com/v0/appelw4DFg7HS9Tky/categorytable",
            {
                Authorization: "Bearer " + process.env.REACT_APP_AIRTABLEKEY,
            } );
    }, [] );

    useEffect( () => {
        if ( data ) setnewBoardgame( "" )
    }, [ data ] )




    //handlesubmit funktion - send data til api
    const handleSubmit = ( e ) => {
        e.preventDefault() //vigtig!

        let nyPost = {
            "fields": {
                "name": newBoardgame,
                "category": [ category ]
            }
        }

        postData( "https://api.airtable.com/v0/appelw4DFg7HS9Tky/boardgametable", nyPost,
            {
                "Authorization": "Bearer " + process.env.REACT_APP_AIRTABLEKEY,
                "Content-Type": "application/json"
            } )

    }

    return (
        <div className='BoardgameCreate container'>

            <Title />

            { error && <Error /> }
            { loading && <Loader /> }

            { data && <h2>Dit brætspil er nu oprettet med id: { data.id }</h2> }

            <div className='row'>

                <div className='col'>

                    <form onSubmit={ handleSubmit }>
                        <div className='mb-3 mt-3'>
                            <label className='form-label me-3'>Skriv navnet på dit brætspil:
                                <input type="text" onInput={ ( e ) => setnewBoardgame( e.target.value ) } id="input" value={ newBoardgame } className='form-control' />
                            </label>
                        </div>

                        <div className='mb-3 mt-3'> {/* Loop categories */ }
                            <label className='form-label me-3'>
                                Vælg en kategori

                                <select defaultValue="DEFAULT" onChange={ e => setCategory( e.target.value ) } className='form-select'>
                                    <option value="DEFAULT" disabled>Vælg en kategori</option>

                                    { dataCategory &&

                                        dataCategory.records.map( c =>

                                            <option value={ c.id } key={ c.id }>{ c.fields.categoryname }</option>

                                        )

                                    }

                                </select>

                            </label>

                        </div>

                        <button type="submit" className='btn btn-primary'>Tilføj nyt brætspil</button>
                    </form>

                </div>


            </div>

        </div>
    )
}

export default BoardgameCreate
