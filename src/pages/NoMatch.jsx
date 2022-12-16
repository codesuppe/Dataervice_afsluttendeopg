import React from 'react'
import Title from '../components/Title'


const NoMatch = () => {
  return (
    <div>
        <Title headline="No match - det er det falske sted." />
        <p>Der er desværre ingen matches på den side, du prøver at finde.</p>

        {/* Link til forsiden */}

    </div>
  )
}

export default NoMatch