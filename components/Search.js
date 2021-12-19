import { useState } from "react";
import styled from "styled-components";
import { BiSearch } from 'react-icons/bi';
import { useRouter} from 'next/router';
 const Search = () => {
   const [search, setSearch] = useState("");
   const router = useRouter();
   
  const handleChange = (event) => {
    event.preventDefault();

    if (search !=="") {
      router.push({
        pathname: '/search',
        query:{search}
      });
    }
   
    setSearch('');
  
     };
     
  return (
    <form onSubmit={handleChange}>
      <StyledInput className={"inputWithIcon"}>
        <Input
          type="text"
          value={search}
          onChange={e =>   setSearch(e.target.value)}
          placeholder="Search Characters"
              />
              <div>
              <BiSearch  color="gray" size="20px"/>
              </div>  
        
      
      </StyledInput>
    </form>
  );
};

const Input = styled.input`
 
  height: 50px;
  width: 100%;
  font-size: 16px;
  border: none;
  margin: 8px 0;
  background:${props => props.theme.input};
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  border-radius:20px;
  color:${props => props.theme.textColor};
`;

const StyledInput = styled.div`
div {
    
    position: absolute;
    left: 0;
    top: 8px;
    padding: 19px 10px;
    text-align:center;
 
    transition: 0.3s;
  }


  &.inputWithIcon {
    position: relative;
  }
`;


export default Search;