export const addPoster = (posters, newPoster) => {
   const posts = [...posters, newPoster];
   localStorage.setItem('posts', JSON.stringify(posts));
   return posts;
};

export const deletePoster = (posters, id) => {
   const posts = posters.filter((poster) => poster.id !== id);
   localStorage.setItem('posts', JSON.stringify(posts));
   return posts;
};

export const editPoster = (posterToEdit) => {
   return posterToEdit;
};

export const saveEdit = (posters, updatedPoster) => {
   const posts = posters.map((poster) =>
      poster.id === updatedPoster.id ? updatedPoster : poster
   );
   localStorage.setItem('posts', JSON.stringify(posts));
   return posts;
};
