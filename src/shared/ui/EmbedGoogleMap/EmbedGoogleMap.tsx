import React from "react";

interface EmbedGoogleMapProps {
  w?: string;
  h?: string;
  location: string;
}
export const EmbedGoogleMap = (props: EmbedGoogleMapProps) => {
  const { w = "100%", h = "100%", location } = props;
  return (
    <iframe
      width={w}
      height={h}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCOUrG93bR1MHD-g7RzuhyiOVI1AqYJDH0
      &q=${location}`}
    />
  );
};
