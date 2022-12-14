import React from "react";

export default function NotFoundPage() {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/notFound.jpg`} alt="404 Not Found" />
    </div>
  );
}
