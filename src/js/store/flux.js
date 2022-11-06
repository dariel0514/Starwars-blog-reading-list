import dist from "webpack-merge";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      baseUrl: "https://www.swapi.tech/api/",
      baseImgUrl: "https://starwars-visualguide.com/assets/img/",
      characters: [],
      favorites: [],
      singleCharacter: {},
      planet: [],
      singlePlanet: {},
    },
    actions: {
      getCharacters: () => {
        fetch(getStore().baseUrl + "people")
          .then((res) => res.json())
          .then((data) => setStore({ characters: data.results }))
          .catch((error) => console.log(error));
      },
      addFavorite: (favorite) => {
        const newFavorites = getStore().favorites;
        newFavorites.push(favorite);
        setStore({ favorites: newFavorites });
      },
      getSingleCharacter: (characterUrl) => {
        fetch(characterUrl)
          .then((res) => res.json())
          .then((data) => setStore({ singleCharacter: data.result }));
      },
      deleteSingleCharacter: (favoriteIndex) => {
        setStore({
          favorites: getStore().favorites.filter(
            (favorite, index) => index !== favoriteIndex
          ),
        });
      },
      getPlanet: () => {
        fetch(getStore().baseUrl + "planets/")
          .then((res) => res.json())
          .then((data) => {
            setStore({
              planet: data.results,
            });
          })
          .catch((error) => console.log(error));
      },
      getSinglePlanet: (planetUrl) => {
        fetch(planetUrl)
          .then((res) => res.json())
          .then((data) => setStore({ singlePlanet: data.result }));
      },
    },
  };
};

export default getState;
