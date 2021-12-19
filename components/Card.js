import {
    Bold,
    Button,
    Container,
    Img,
    InfoContainer,
    LikeIcon,
    MarginLeft,
    Subtitle,
    Title,
    MyModel

} from '../components/stylesComp/cardStyle';
import { useState,useContext } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineArrowRight } from 'react-icons/ai';
import Model from './Model';
import {LikeContext } from '../context/LikeContext';

export default function Card(props) {
    const [open, setOpen] = useState(false);
 
    const openModel = () => {
        setOpen(prev => !prev);
    }

    const {like, setLike,likeControl} =  useContext(LikeContext);

    const [value, setValue] = useState('');
    const { character} = props;

 
    const handleLikes = (id) => {
       
       
        const value = likeControl(like, id);
        
        if (value.id === id) {
            setValue(value);
            setLike(!like);
            
  }

          
    }
    console.log(character);
    return (
        <>
    
        <Container>
           
            <Img src={character.image}/>
            <div>
                <Title>{character.name}</Title>
                <InfoContainer>
                    <div>
                        <Subtitle>Origin</Subtitle>
                        <Bold>{character.origin?.name} &nbsp;</Bold>
                    </div>
                    <div>
                    <Subtitle>Species</Subtitle>
                        <Bold >{character?.species}</Bold>
                    </div>
                </InfoContainer>
                
            </div>
            <LikeIcon onClick={(e)=>handleLikes(character.id)}>
               {!value.like?<AiOutlineHeart size="25px" color="E9E84E"/>: <AiFillHeart size="25px" color="E9E84E"/>}
            </LikeIcon >
            <Button onClick={openModel}>
              
                <MarginLeft>
                See Episods
                </MarginLeft>
                <AiOutlineArrowRight size="16px" />
                
            </Button>
            <MyModel>
            <Model data={character}handleLikes={handleLikes} openModel={open} like={value.like} setOpenModel={setOpen }/>
            </MyModel>
            </Container>
            </>
    )
}
