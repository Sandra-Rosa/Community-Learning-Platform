import React from 'react';

const StudyGroupList = ({ studyGroups }) => {
  return (
    <div>
      <h2>Study Groups</h2>
      {studyGroups.map((studyGroup, index) => (
        <div key={index}>
          <h3>{studyGroup.groupName}</h3>
          <p>{studyGroup.description}</p>
        </div>
      ))}
    </div>
  );
};

export default StudyGroupList;
