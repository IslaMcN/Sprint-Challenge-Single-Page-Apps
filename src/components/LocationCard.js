import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
  return <span>
    <div className="location-card">
            <h2>{name}</h2>
            <div className="type">
                Type: <em>{type}</em>
            </div>
            <div className="dimension">
                Dimension: <strong>{dimension}</strong>
            </div>
            <h3>Residents</h3>
            {residents.map(resident => (
                <div key={residents} className="residents">
                    {resident}
                </div>

            ))}
        </div>
  </span>
  ;
}
