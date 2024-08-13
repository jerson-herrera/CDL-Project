import React from "react";
import { Link } from "react-router-dom";

function Logo({ imageUrl, alt, redirectUrl, className }) {
  return (
    <Link to={redirectUrl} target="_blank">
      <img src={imageUrl} alt={alt} className={className} />
    </Link>
  );
}

export default Logo;



