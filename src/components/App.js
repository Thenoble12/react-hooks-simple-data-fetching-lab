import React, { useState, useEffect } from "react"

function App() {

    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const url = "https://dog.ceo/api/breeds/image/random"

    useEffect(() => {
        if (!loading) setLoading(true);
        const timeoutID = setTimeout(() => {

            fetch(url)
            .then((e) => e.json())
            .then((data) => {
                setImage(data.message);
                setLoading(false);
            })
        }, 2000)
        
        return function cleanup() {
            clearTimeout(timeoutID);      
            };
    },[image]);



    return (
        <div>
            {loading ? (<p>"Loading..."</p>) : (<img src={image} alt="A Random Dog" />)}
        </div>
    )
}

export default App
