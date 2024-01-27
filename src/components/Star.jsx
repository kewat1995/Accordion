import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStar }) => {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(0);

  const handelonClick = (getcurrentId) => {
    setRating(getcurrentId);
  };
  const handelMounseEnter = (getcurrentId) => {
    setHover(getcurrentId);
  };
  const handelMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            size={20}
            className={index <= (hover || rating) ? "active1 " : "inactive"}
            onClick={() => handelonClick(index)}
            onMouseEnter={() => handelMounseEnter(index)}
            onMouseLeave={() => handelMouseLeave()}
          />
        );
      })}
      <p>give the rating of 5 this apps</p>
    </div>
  );
};

export default StarRating;
