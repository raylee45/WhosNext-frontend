import React from 'react';

const MatchedPerson = ({ user }) => (
  <div className="liked-person">
    <div className="liked-person-image">
      <img
        src={`/images/users/${user.image}`}
        alt={`You liked ${user.name}`}
      />
    </div>
  </div>
);

export default MatchedPerson