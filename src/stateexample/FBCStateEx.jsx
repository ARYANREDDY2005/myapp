import React from 'react'

const FBCStateEx = () => {
    const [value ,setvalue] =React.useState(0);
    console.log(value);
    const cahngevalue=()=>{
        setvalue(1000);
    }
  return (
    <div>FBCStateEx
      <h1>{value}</h1>
      <button onClick={cahngevalue}>Change Value</button>
    </div>
  )
}

export default FBCStateEx
