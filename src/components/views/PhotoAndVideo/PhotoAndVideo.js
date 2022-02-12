import React from 'react'
import Gallery from "react-photo-gallery";
import { photos } from "./photos";


export const PhotoAndVideo = () => {

  const BasicRows = () => <Gallery photos={photos} />;
  
  return (
    <>
      <div className=" animate__animated animate__fadeIn">
      {
        <BasicRows />
      }
      </div>
    </>
  )
}
