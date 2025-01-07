import { postManagerHelper } from "../../helpers/postManagerHelper";

const PosterDetails = ({ poster }) => {
  const date = new Date(poster.timestamp);
  
  return (
    <div>
      <h3>{poster.title}</h3>
      {/* Add more details of the poster here */}
      <p>{postManagerHelper.POSTER_DETAILS.FIELDS.ID} {poster.id}</p>
      <p>{postManagerHelper.POSTER_DETAILS.FIELDS.TIMESTAMP} {date.toLocaleString()}</p>
    </div>
  );
};

export default PosterDetails;  // Default export
