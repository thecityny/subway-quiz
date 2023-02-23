import React, { useState } from "react";

type Author = {
    name: string;
    url: string;
  };

const byline = JSON.parse(process.env.REACT_APP_AUTHOR as string) as Author[];

const Byline = () => {
    return(
    <span className="byline">
    By{" "}
    {byline.map((author: Author, i: number) => (
      <span key={i} className="author">
        <a href={author.url}>{author.name}</a>
        {i < byline.length - 2
          ? ", "
          : i < byline.length - 1
          ? " and "
          : ""}
      </span>
    ))}
  </span>
)}

export default Byline