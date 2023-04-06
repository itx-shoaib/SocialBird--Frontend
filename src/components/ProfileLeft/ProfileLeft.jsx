import React from 'react'
import "./ProfileLeft.css"
import InfoCard from '../InfoCard/InfoCard'
import LogoSearch from "../LogoSearch/LogoSearch"
import FollowerCard from "../FollowerCard/FollowerCard"

const ProfileLeft = () => {
    return (
        <div className="ProfileLeft">
            <LogoSearch />
            <InfoCard />
            <FollowerCard />
        </div>
    )
}

export default ProfileLeft