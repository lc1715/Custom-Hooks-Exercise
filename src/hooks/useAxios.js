import { useState } from 'react'
import { v1 as uuid } from "uuid";
import axios from "axios";


const useAxios = () => {
    const [cards, setCards] = useState([]);

    const addCard = async (baseUrl, restOfUrl) => {
        const response = await axios.get(
            `${baseUrl}${restOfUrl}`
        );

        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };

    return [cards, addCard]
}

export default useAxios;
