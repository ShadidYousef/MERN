import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [author, setAuthor] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Author/" + id)
      .then((res) => {
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loaded && <p>Author: {author.name}</p>}
    </div>
  );
};

export default Details;
