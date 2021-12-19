import styled from "styled-components";
import { BiCameraMovie } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: ${(props) => props.theme.card};
	border: 1px solid rgba(0, 0, 0, 0.1);

	box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 0.8px rgba(0, 0, 0, 0.01);
	margin: 5px 15px;
	border-radius: 15px;
	padding: 15px;
	position: relative;
	.episode-wrapper {
		display: grid;
		grid-template-columns: auto auto;
		margin: 10px 15px;
	}
	.episode {
		display: flex;
		
	}
	.episode-e {
		margin-left: 5px;
		font-weight: bold;
	}
	.episode-title {
		margin-left: 5px;
		color: ${(props) => props.theme.subtitle};
	}
    .title{
        font-weight: bold;
        font-size: 18px;
        margin-left:36px;
    }
    .icon{
        text-align: center;
        margin:auto;

    }
`;

export default function DetailCard({ episode }) {
	return (
		<Container>
			<div className={"title"}>{episode.name}</div>
			<div className={"episode-wrapper"}>
				<div className={"episode"}>
					<div className={"icon"}>
						<BiCameraMovie size="20px" color="#E9E84E" />
					</div>
					<div>
						<div className={"episode-e"}>{episode.episode}</div>
						<div className={"episode-title"}>Episode</div>
					</div>
				</div>
				<div className={"episode"}>
					<div className={"icon"}>
						<FaCalendarAlt size="20px" color="#E9E84E" />
					</div>
					<div>
						<div className={"episode-e"}>{episode.air_date}</div>
						<div className={"episode-title"}>Air Date</div>
					</div>
				</div>
			</div>
		</Container>
	);
}
