/**
 * Social Feeds Widget
 */
import React from 'react';

const SocialFeedsWidget = ({ type, friendsCount, feedsCount, icon }) => (
    <div className="social-card">
        <div className="d-flex justify-content-between">
            <span className={`square-60 social-icon bg-${type}`}><i className={icon}></i></span>
            <div className="cotent">
                <h3>{friendsCount}</h3>
                <span className="fs-14">Friends</span>
            </div>
            <div className="border-center"></div>
            <div className="cotent">
                <h3>{feedsCount}</h3>
                <span className="fs-14">Feeds</span>
            </div>
        </div>
    </div>
);

export default SocialFeedsWidget;
