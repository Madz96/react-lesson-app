import { postManagerHelper } from '../../helpers/postManagerHelper';

const PosterDetails = ({ poster }) => {
   const createdDate = new Date(poster.createdTime);
   const lastEditedDate = poster?.lastEdited
      ? new Date(poster.lastEdited)
      : null;

   return (
      <div>
         <h3>{poster.title}</h3>
         {/* Add more details of the poster here */}
         <p>
            {postManagerHelper.POSTER_DETAILS.FIELDS.ID} {poster.id}
         </p>
         <p>
            {postManagerHelper.POSTER_DETAILS.FIELDS.TIMESTAMP}{' '}
            {createdDate.toLocaleString()}
         </p>
         {lastEditedDate && (
            <p>
               {postManagerHelper.POSTER_DETAILS.FIELDS.LAST_EDITED}{' '}
               {lastEditedDate.toLocaleString()}
            </p>
         )}
      </div>
   );
};

export default PosterDetails; // Default export
