import { useState } from 'react'
import axios from 'axios'


const usePatchData = () => {
  
    // States til håndtering af data, loading, error

    const [data, setData] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    //payload er de data, der skal patches
    const patchData = ( url, payload = null, headers = null, params = null ) => {
        setData()
        setLoading(true)
        

        axios.patch( url, payload, {headers: headers, params : params} )
            .then( res => { 
                console.log( res.data ) 
                setData(res.data)
                setError(false)
            } )
            .catch( err => {
                console.log( "error" )
                setError(true)
                setData()
            })
            .finally( ()=> {

                setLoading(false)

            })

    }

   
    //det der "udbydes" fra hooket her
    return { patchData, error, loading, data }
}

export default usePatchData
