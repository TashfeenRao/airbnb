import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import '../css/SearchResult.css';

export default function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <p>{location}</p>
        <h3>{title}</h3>
        <p>___</p>
        <p>{description}</p>
      </div>
      <div className="searchResult__infoBottom">
        <div className="searchResult__stars">
          <StarIcon className="searchResult__star" />
          <p>
            <strong>{star}</strong>
          </p>
        </div>
        <div className="searchResults__price">
          <h2>{price}</h2>
          <p>{total}</p>
        </div>
      </div>
    </div>
  );
}
