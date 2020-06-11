import React, { useEffect, useState } from "react";
const NotePage = ({ match }) => {
  useEffect(() => {
    const pageId = match.params.id;
    fetch("http://localhost:3000/data/data.json");
  }, []);
  return <>노트페이지 </>;
};

export default NotePage;
