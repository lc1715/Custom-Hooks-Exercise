import { useState } from "react";


const useFlipCard = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);

    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };

    return [isFacingUp, flipCard]
}

export default useFlipCard;