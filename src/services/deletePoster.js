export const deletePoster = (posters, id) => {
    return posters.filter((poster) => poster.id !== id);
  };
  