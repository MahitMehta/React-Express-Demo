import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const endpoint = "/api/user-data";
    const data = await fetch(endpoint).then(res => res.json()).then(data => data);
    setUsers(data);
  }

  useEffect(() => {
    if (!users.length) getUsers()
  })

  return (
    <div>
      <h1>App Users: </h1>
      <ul>
        {users.map((user, idx) => {
          return (
            <li key={idx}>Name: {user.name}, Age: {user.age}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
