import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { route } from "next/dist/server/router";

const Container = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
	margin-top: 40px;
`;
export default function search() {
	const router = useRouter();

	const query = router.query.search;
	const [characters, setCharacters] = useState(null);
    const [search, setSearch] = useState(query);
    const [loading, setLoading] = useState(true);
	useEffect(() => {
		const handleSearch = async () => {
			const results = await fetch("/api/characters", {
				method: "post",
				body: search,
			});
			const { characters, error } = await results.json();
			if (error) {
				route.replace("/");
			} else {
                setCharacters(characters);
                setLoading(false);
			}
		};

		handleSearch();
	}, []);
    if (loading) {
        return <div class="lds-hourglass"></div>
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
