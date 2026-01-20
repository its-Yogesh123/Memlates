import { useEffect, useState } from "react";
import MemeCard from "../components/cards";
import { getAllMemes } from "../api/memes";
const Home = ()=>{
    const [memes,setMemes]= useState(null);
    useEffect(()=>{
        getAllMemes().then((res)=>{
            if(res.data)setMemes(res.data.memes);
            else console.log("No memes");
        })
        .catch(()=>{console.log("Failed to Fetch Memes");});

    },[]);
    return (
        <div className="row">
            {memes && memes.map((meme)=><MemeCard name={meme.name} url={meme.url}/>)}
        </div>
    );
};

export default Home;