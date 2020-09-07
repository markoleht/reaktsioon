import React, { useState } from 'react';
import Tweet from "./Tweet";

function app() {
  const [users, setUsers] = useState ([
    { name: "Eeduard", message: "Hello there" },
    { name: "Piret", message: "miks sa Eesti keeles ei räägi?" },
    { name: "Turvamees", message: "Lepime kokku, et siin ei räägi, eks" },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default app;
