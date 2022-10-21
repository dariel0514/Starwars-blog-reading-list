const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			 baseUrl: 'https://www.swapi.tech/api/',
			 baseImgUrl: 'https://starwars-visualguide.com/assets/img/',
			 characters: [],
			 favorites: [],
			 singleCharacter: {}
		},
		actions: {
			getCharacters: () => {
				fetch(getStore().baseUrl + 'people')
					.then(res => res.json())
					.then(data => setStore({characters:data.results}))
					.catch(error => console.log(error))
				},
				addFavorite: (favorite) => {
					const newFavorites = getStore().favorites
					newFavorites.push(favorite)
					setStore({favorites: newFavorites})
				},
				getSingleCharacter: (characterUrl) => {
					fetch(characterUrl)
					.then(resp => resp.json())
					.then(data => setStore({singleCharacter: data.result}))
				},
				deleteSingleCharacter: (favoriteIndex) => {
				    getStore({
					favorites: getStore().favorites.filter(
					(favorite, index) => index !== favoriteIndex
					)
				}),
		}
	 };
  };
};

export default getState;