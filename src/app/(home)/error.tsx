"use client";

import { useEffect } from "react";


interface ErrorProps{
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps){

    //to send error to a third party
    useEffect(() =>{
        console.log(error)
    }, [])

    return (
        <div style={{ 
        padding: '10rem'}}>
            <h1>
                :c
            </h1>
            <p>error occured</p>
            <button onClick={reset}>refresh</button>
        </div>
    )
}