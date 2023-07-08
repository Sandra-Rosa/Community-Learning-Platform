import React, { useState } from 'react';

const StudyGroupForm = ({ addStudyGroup }) => {
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudyGroup = {
      groupName,
      description,
    };
    addStudyGroup(newStudyGroup);
    setGroupName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Group Name:</label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Create Study Group</button>
    </form>
  );
};

export default StudyGroupForm;
