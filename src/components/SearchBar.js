import React from "react";

// this is a functional component (function instead of class)
export default function SearchBar(props) {
  console.log(props);
  const { text, something } = props;
  return (
    <>
      <p>{text} {something}</p>
      <p>{something}</p>
    </>

  )
}