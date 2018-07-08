/**
 * Message Block Component
 */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const Message = ({ even, adminPhotoUrl, data, selectedUserPhotoUrl }) => {
  if (even) {
    return (
      <div className="d-flex flex-nowrap">
        <Avatar alt="user profile" src={selectedUserPhotoUrl} className="img-fluid rounded-circle mr-15 align-self-center" />
        <div className="chat-bubble even">
          <p className="mb-0">{data.message}</p>
          <span className="text-right">{data.sent}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex flex-nowrap flex-row-reverse">
      <Avatar alt="user profile" src={adminPhotoUrl} className="img-fluid rounded-circle ml-15 align-self-center" />
      <div className="chat-bubble odd">
        <p className="mb-0">{data.message}</p>
        <span className="text-left">{data.sent}</span>
      </div>
    </div>
  )
};

export default Message;
