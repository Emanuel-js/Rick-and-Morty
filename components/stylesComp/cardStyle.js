import styled from "styled-components";

export const Container =styled.div`
display:flex;
background:${props => props.theme.card};
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 0.8px rgba(0, 0, 0, 0.01);
margin:10px;
border:1px solid  rgba(0, 0, 0, 0.1);
border-radius:20px;
padding:15px;
position: relative;

`;
export const Img = styled.img`
width:140px;
border-radius:15px;
border:1px solid  rgba(0, 0, 0, 0.1);

`;

export const Title = styled.div`
font-size:20px;
font-weight:bold;
margin:0px 15px;
`
export const Button = styled.div`
display:flex;
cursor:pointer;
justify-content: center;
align-items: center;
position:absolute;
bottom:0;
right:0;
background:#E9E84E;
color: ${props => props.theme.textColor};
border:none;
border-radius:5px;
padding:10px 20px;
margin:20px;
text-align:center;
font-weight:bold;
`;
export const MarginLeft = styled.div`
margin-right:10px;
text-align:center;
font-weight:bold;
font-size:16px;
`;
export const LikeIcon = styled.div`
position:absolute;
top:15px;
right:20px;
`;

export const InfoContainer = styled.div`
display: grid;
grid-template-columns: auto auto;
margin:10px 15px;
`;
export const Subtitle = styled.div`
color:${props => props.theme.subtitle};
`;

export const Bold = styled.div`
font-weight:bold;
`;

export const MyModel = styled.div`

z-index:10;
`;