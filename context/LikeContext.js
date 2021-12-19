import { createContext, useState } from 'react';


const LikeContext = createContext(null);



const LikeProvider = ({ children }) => {
  
    const [like, setLike] = useState(false);
    
    const likeControl=(l,id) => {
    const  character = {
           id,
           like:l
        }
        return character;
    }

    return <LikeContext.Provider value={{
        like, setLike,likeControl
    }}>
        {children}
    </LikeContext.Provider>
};

export { LikeContext, LikeProvider };