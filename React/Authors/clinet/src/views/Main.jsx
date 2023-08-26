import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Delete from '../components/Delete';


const Main = () => {
  const [authors, setAuthors] = useState([]);

  const removeAuthor = (id) => {
    setAuthors(authors.filter((author) => author._id !== id));
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/Author')
      
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Favorite authors</h1>
      <Link to="/new">Add an author</Link>

      <h3>We have quotes by:</h3>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author._id}>
              <td>
                <Link to={`/Author/${author._id}`}>{author.name}</Link>
              </td>
              <td>
                <Link to={`/edit/${author._id}`}>Edit</Link>
                <Delete successCallback={id=>{removeAuthor(id)}} autherId={author._id}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
