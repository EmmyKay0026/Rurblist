import React from "react";
import Image from "next/image";
// import rurblisthouse from "../../../assets/rurblisthouse.png";
import Link from "next/link";
import Button from "../../atom/Button";

const PropertyLocation = ({ viewHomeLink, homeImg }) => {
  return (
    <div>
      <p>Warri, Delta state.</p>
      <Image className="" src={homeImg} />
      <Link href={viewHomeLink}>
        <Button children="View home" />
      </Link>
    </div>
  );
};

export default PropertyLocation;
