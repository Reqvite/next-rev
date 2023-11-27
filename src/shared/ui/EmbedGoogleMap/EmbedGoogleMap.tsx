import React from "react";

export const EmbedGoogleMap = () => {
  return (
    <iframe
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCOUrG93bR1MHD-g7RzuhyiOVI1AqYJDH0
        &q=Space+Needle,Seattle+WA"
    />
  );
};
