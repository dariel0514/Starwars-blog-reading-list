import React, {useContext}from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context)
	const history = useHistory()

	// useEffect(() => {
	// 	getCharacters()
	// }, [])

	return(
	<>
		<h1>Star Wars</h1>
		<div className="card-group">
			{store.characters.map((characters) => {
				return(
					<div className="card" key={characters.uid}>
						<img src={store.baseImgUrl + 'characters/' + characters.uid + '.jpg'} className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">{characters.name}</h5>
						</div>
						
						<button className="btn btn-primary" onClick={() => {
							actions.getSingleCharacter(characters.url)
							history.push('/singleCharacter')
						}}>learn more</button>
						
						<button className="btn btn-warning" onClick={() =>{
							actions.addFavorite(characters)
						}}><i className="far fa-heart"></i></button>
					</div>
				)
			})}
		</div>
	</>
  )
}