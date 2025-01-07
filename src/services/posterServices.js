export const addPoster = (posters, newPoster) => {
   return [...posters, newPoster];
};

export const deletePoster = (posters, id) => {
   return posters.filter((poster) => poster.id !== id);
};

export const editPoster = (posterToEdit) => {
   return posterToEdit;
};

export const saveEdit = (posters, updatedPoster) => {
   return posters.map((poster) =>
      poster.id === updatedPoster.id ? updatedPoster : poster
   );
};
