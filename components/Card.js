import {
    Bold,
    Button,
    Container,
    Img,
    InfoContainer,
    LikeIcon,
    MarginLeft,
    Subtitle,
    Title
} from '../components/stylesComp/cardStyle';
import { useState } from 'react';
import Mode from './Model';
import { AiFillHeart, AiOutlineHeart, AiOutlineArrowRight } from 'react-icons/ai';
import Model from './Model';




export default function Card(props) {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const {character}= props;
    return (
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
                        <Bold >{character?.species ||'Human'}</Bold>
                    </div>
                </InfoContainer>
                
            </div>
            <LikeIcon>
                <AiFillHeart size="25px" color="E9E84E"/>
            </LikeIcon >
            <Button onClick={onOpenModal}>
                <Model open={open} onClose={onCloseModal}/>
                <MarginLeft>
                See Episods
                </MarginLeft>
                <AiOutlineArrowRight size="16px"/>
                </Button>
        </Container>
    )
}
