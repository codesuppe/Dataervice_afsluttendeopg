import React, {useEffect, useState} from 'react'
import useGetData from '../../hooks/useGetData';
const Energidata = () => {
    const { error, loading, data, getData } = useGetData();

    
    useEffect( () => {
        getData(
            "https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=2022-12-14T00:00&end=2022-12-15T00:00&filter=%7B%22PriceArea%22:[%22dk1%22]%7D&sort=HourDK%20DESC&timezone=dk"
          )
    }, []);



  return (
    <div className='container col-12 col-md-4'>Energidata

        {data &&
        
        data.records.map((i, o)=>
            
            <div className='card text-center' key={"energi" + o}>

                <p className='cap-first'>{new Date(i.HourDK).toLocaleString("da-dk", {weekday: "long", hour: "2-digit", minute: "2-digit"})}</p>
                <p>{(i.SpotPriceDKK / 1000).toFixed(2)} kr,-</p>

            </div>

        )

        }


    </div>
  )
}

export default Energidata