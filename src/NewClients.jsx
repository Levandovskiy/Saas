import React from "react";
import "./NewClients.scss";

const clients = [
  {
    name: "Nicci ",
    location: "Chicago, IL",
    avatar: "/avatars/nicci.jpg",
  },

  {
    name: "Nicci Troiani",
    location: "Chicago, IL",
    avatar: "/avatars/nicci.jpg",
  },
  {
    name: "George Fields",
    location: "New York, NY",
    avatar: "/avatars/george.jpg",
  },

  {
    name: "Jones Dermot",
    location: "San Francisco, CA",
    avatar: "/avatars/jones.jpg",
  },

  { name: "Jane Doe", location: "New York, NY", avatar: "/avatars/jane.jpg" },
];

const NewClients = () => {
  return (
    <section className="newClients">
      <h3 className="newClients__title">New Clients</h3>
      <ul className="newClients__list">
        {clients.map((client, index) => (
          <li key={index} className="client">
            <img
              src={client.avatar}
              alt={client.name}
              className="client__avatar"
            />
            <div className="client__info">
              <span className="client__name">{client.name}</span>
              <span className="client__location">{client.location}</span>
            </div>
            <button className="client__menu">⋮</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewClients;
