import React, {useState} from "react"
import memesData from "./data/memeData"

export default function Meme() {

    const [memeImg, setMemeImg] = useState("")

    function getMemeImage(e) {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImg(memesArray[randomNumber].url)
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <img
                    src={memeImg}
                    className="meme--image"
                    
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImg} className="meme--image" />
        </main>
    )
}