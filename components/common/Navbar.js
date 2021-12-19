import styled from "styled-components";
import Search from '../Search';
import { BsFillMoonFill, BsMoonFill } from 'react-icons/bs';
import Link from 'next/link';

const Container = styled.div`
display:flex;
align-items: center;
justify-content:space-around;
box-shadow: 0px 0px 3px ${props=>props.theme.input};

`;

const LogoContainer = styled(Link)`
margin-left:30px;
margin-top:10px;
cursor: pointer;
`;
const Logo = styled.img`
width:250px;
cursor: pointer;
`;
const Icon = styled.div`


`;

const SearchContainer = styled.div`
flex:0.5;
`;
const Button = styled.div`
cursor:pointer;
`;



export default function Navbar({theme,setTheme}) {
    
    const toggle = () => {
        console.log(theme);
        theme === 'light'?setTheme('dark'):setTheme('light');
    }
    
    return (
        <Container>
            <LogoContainer href="/">
                <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/320px-Rick_and_Morty.svg.png"/>
            </LogoContainer>
            <SearchContainer>
                <Search/>
            </SearchContainer>
            <Button
            onClick={toggle}
            >{theme === 'light' ? <BsFillMoonFill /> : <BsMoonFill />} <b>{theme === 'light' ?'Dark Mode':'Light Mode'}</b></Button>
       </Container>
    )
}
