import React, { useState } from 'react';
import ThreadForm from './ThreadForm';

const DiscussionList = ({ discussions }) => {
  const [activeDiscussion, setActiveDiscussion] = useState(null);

  const handleThreadSubmit = (newThread) => {
    const updatedDiscussions = discussions.map((discussion) => {
      if (discussion === activeDiscussion) {
        return {
          ...discussion,
          threads: [...discussion.threads, newThread],
        };
      }
      return discussion;
    });
    setActiveDiscussion({ ...activeDiscussion, threads: [...activeDiscussion.threads, newThread] });
  };

  return (
    <div>
      <h2>Discussions</h2>
      {discussions.map((discussion, index) => (
        <div key={index}>
          <h3>{discussion.title}</h3>
          <p>{discussion.content}</p>
          {activeDiscussion === discussion ? (
            <>
              <ThreadForm addThread={handleThreadSubmit} />
              {discussion.threads.map((thread, i) => (
                <div key={i}>
                  <h4>{thread.title}</h4>
                  <p>{thread.content}</p>
                </div>
              ))}
            </>
          ) : (
            <button onClick={() => setActiveDiscussion(discussion)}>Start Thread</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default DiscussionList;
