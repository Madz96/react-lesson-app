export const saveEdit = (posters, updatedPoster) => {
    return posters.map((poster) =>
      poster.id === updatedPoster.id ? updatedPoster : poster
    );
  };
  