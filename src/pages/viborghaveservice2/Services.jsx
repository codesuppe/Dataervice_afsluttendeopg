import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";

import useGetData from "../../hooks/useGetData";
import Title from "../../components/Title";
import ServicesCard from "./ServicesCard";

const Services = () => {

    const { error, loading, data, getData } = useGetData()

    useEffect( () => {
        getData( "http://localhost:5023/services" )

    }, [] )

    return (

        <div className="Services container">



            <div>
                <div className="titles text-center text-light">
                    <h1 className="my-3 ">Vores ydelser</h1>
                    <div className="container w-50">
                        <hr className="divider1 w-25 mx-auto" />
                        <p>Herunder en oversigt over alle vores services.</p>
                        <p>Hvis du måtte have flere spørgsmål, er du velkommen til at kontakte os.</p>
                    </div>

                </div>


                {/* Eroor */ }
                { error && <h4>Ingen services her</h4> }

                {/* Loading */ }
                { loading && <Loader /> }


                <div className="row row-cols-1 row-cols-md-4 g-2">

                    { data &&

                        data.map( ( t ) =>
                            <div className="col" key={ t._id }>

                                <ServicesCard t={ t } />

                            </div>
                        ) }

                </div>
            </div>
        </div>
    )


}

export default Services;