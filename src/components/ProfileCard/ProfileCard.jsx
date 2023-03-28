import React from 'react'
import cover from "../../img/cover.jpg"
import profile from "../../img/profileImg.jpg"
import "../ProfileCard/ProfileCard.css"

const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div className="ProfileImg">
                <img src={cover} alt="" />
                <img src={profile} alt="" />
            </div>

            <div className="ProfileName">
                <span>Mrs XYZ</span>
                <span>UI/UX designer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>6,580</span>
                        <span>Followings</span>
                    </div>
                    <div className="vl">
                    </div>
                    <div className="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
                <span className='span'>My Profile</span>
            </div>
        </div>
    )
}

export default ProfileCard