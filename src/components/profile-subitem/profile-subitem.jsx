import React from 'react'
import './profile-subitem.scss'

export const ProfileSubItem = () =>
    (
        <div className="profile-sub-item">
            <div className="sub-bg" style={{backgroundImage:`url(https://picsum.photos/id/22/200/300)`}}/>
            <div className="footer">
                <div className="title">Title</div>
                <div className="price">Price</div>
            </div>
        </div>
    )