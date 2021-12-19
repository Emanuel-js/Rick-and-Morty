import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Background = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.2);
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
`;

export const ModalWrapper = styled.div`
	width: 50%;
	height: 96%;
    overflow:scroll;
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.9);
	color: ${(props) => props.theme.textColor};
	background: ${(props) => props.theme.bg};
	z-index: 10;
	border-radius: 15px;
    -ms-overflow-style: none;  
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none; 
    }
`;

export const ModalContent = styled.div`
display: grid;
grid-template-columns: auto auto;
margin-top: 20px;
`;
export const Header = styled.div`
	display: flex;
   
	align-items: center;
	justify-content: space-between;

	width: 100%;
	padding: 30px 10px;
	box-shadow: 0px 0px 3px ${(props) => props.theme.input};
	.profile {
		display: flex;

		align-items: center;
		justify-content: center;
	}
	.imgs {
		width: 50px;
		border-radius: 50%;
	}
	.title {
		margin-left: 20px;
		font-weight: 700;
		font-size: 26px;
        
	}
	.btn {
		background: #e9e84e;
		padding: 15px 20px;
		color: ${(props) => props.theme.textColor};
		font-size: 20px;
		font-weight: bold;
		border-radius: 5px;
		margin-right: 25px;
	}
	.left-header {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.like {
		margin-left: 25px;
		text-align: center;
		margin-top: 5px;
		cursor: pointer;
	}
`;

export const CloseModalButton = styled(AiOutlineCloseCircle)`
	cursor: pointer;
	color: ${(props) => props.theme.subtitle};
	z-index: 10;
	font-size: 50px;
`;
