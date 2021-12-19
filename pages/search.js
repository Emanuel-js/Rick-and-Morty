import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import styled from "styled-components";

const Container = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
	margin-top: 40px;
`;
export default function Search() {
	const router = useRouter();

	const query = router.query.search;
	 const [characters, setCharacters] = useState(null);
     const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const handleSearch = async () => {
			const results = await fetch("/api/characters", {
				method: "post",
				body: query,
			});
			const { characters, error } = await results.json();
			if (error) {
				router.replace("/");
				alert("Not Found 😞");
			} else {
                setCharacters(characters);
                setLoading(false);
			}
		};

		handleSearch();
	}, [query]);
    if (loading) {
        return <div className="lds-hourglass"></div>
      }
	return (
		<div>
			<Container>
				{characters?.map((character) => (
					<Card key={character.id} character={character} />
				))}
			</Container>
		</div>
	);
}
