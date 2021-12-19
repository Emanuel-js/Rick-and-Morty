import { useState, useRef } from "react";
import {
	Background,
	CloseModalButton,
	ModalContent,
	Header,
  ModalWrapper,

} from "./stylesComp/modelStyle";
import { AiFillHeart,AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import Card from './DetailCard';


export default function Model({ setOpenModel, openModel ,data,like,handleLikes}) {
	const modalRef = useRef();
	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setOpenModel(false);
		}
	};

	return (
		<>
			{openModel ? (
				<Background onClick={closeModal} ref={modalRef}>
					<ModalWrapper openModel={openModel}>
						<Header>
              <div className="profile">
                <img className={"imgs"} src={data.image} />
                <div className={"title"}>{data.name}</div>
             
                <div className={"like"} onClick={(e)=>handleLikes(data.id)}>
               
               {!like?<AiOutlineHeart size="25px" color="E9E84E"/>: <AiFillHeart size="25px" color="E9E84E"/>}
          
                 </div>
              
              </div>
              <div className={"left-header"}>  
                  <div className="btn">
                  {data.episode.length} Episodes
                  </div>
                  <CloseModalButton
                    aria-label="Close modal"
                    onClick={() => setOpenModel((prev) => !prev)}
                  />
              </div>
            
						</Header>
            <ModalContent>
              {
                data?.episode?.map((episode) =><Card episode={episode} key={episode.id}/>)
             }
            </ModalContent>
					</ModalWrapper>
				</Background>
			) : null}
		</>
	);
}
