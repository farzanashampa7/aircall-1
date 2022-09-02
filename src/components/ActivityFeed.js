import React from 'react';
import ActivityFeedItems from './ActivityFeedItems';
import '../css/ActivityFeed.css';

const ActivityFeed = (props) => {
  const {
    callLists,
    setCallLists,
    archivedCallLists,
    setArchivedCallLists,
    presentState,
    setPresentState,
  } = props;

  return (
    <div className="call-list">
      {presentState === 'CURRENT' && (
        <strong>
          <h1>Activity log</h1>
        </strong>
      )}
      {presentState === 'ARCHIVE' && (
        <strong>
          <h1>Archived Calls</h1>
        </strong>
      )}
      <div className="call-list-items">
        {presentState === 'CURRENT' &&
          callLists.map((call) => {
            return (
              <ActivityFeedItems
                key={call.id}
                call={call}
                callLists={callLists}
                setCallLists={setCallLists}
                archivedCallLists={archivedCallLists}
                setArchivedCallLists={setArchivedCallLists}
                presentState={presentState}
                setPresentState={setPresentState}
              />
            );
          })}
        {presentState === 'ARCHIVE' &&
          archivedCallLists.map((call) => {
            return (
              <ActivityFeedItems
                key={call.id}
                call={call}
                callLists={callLists}
                setCallLists={setCallLists}
                archivedCallLists={archivedCallLists}
                setArchivedCallLists={setArchivedCallLists}
                presentState={presentState}
                setPresentState={setPresentState}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ActivityFeed;
