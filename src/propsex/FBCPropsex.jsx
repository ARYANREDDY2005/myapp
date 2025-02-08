import React from 'react'

const FBCPropsex = (props) => {
    console.log(props);
 if(props.isMarried=== true){
    return (
        <div>
            <h1>{props.username} is a unmarried person</h1>
            {
                props.hobbies.map(hobby=>{
                    return <li>{hobby}</li>
                })
            }
        </div>
    )
 }else{
    return <h1>Not Married</h1>
 }
 
}

export default FBCPropsex
