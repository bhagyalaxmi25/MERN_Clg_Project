import React, {useEffect, useState} from "react";
import axios from "axios";

const Memes = () => {
    const [memes, setmemes] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMemes = async () => {
        try {
            const res = await axios.get("https://meme-api.com/gimme/wholesomememes");
            setmemes(res.data);
        } catch (error){
            console.log(error);
            
        }
    };

    useEffect
}