import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="Home">
                <ProfileSide />
                <div className="post">post</div>
                <div className="rightSide">rightSide</div>
            </div>
        </>
    )
}

export default Home