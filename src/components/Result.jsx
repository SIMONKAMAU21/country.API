
import React from 'react';

const Results = ({ data }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {data.map((item) => (
          <>
          
          <li key={item.id}>{item.name}
        <img src={item.flag} alt="" />
        {item.population}
        {item.region}
        {item.capita}
          
          
          </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Results;
