import React from 'react'
import { Followers } from '../../Data/FollowerData'
import "./FollowCard.css"

const FollowerCard = () => {
    return (
        <div className="FollowerCard">
            <h3>Who is following</h3>
            {Followers?.map((followers, id) => (
                <div key={id} className="follower">
                    <div>
                        <img src={followers.img} alt="" className="followerimg" />
                        <div className="name">
                            <span>{followers.name}</span>
                            <span>{followers.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>
                        follow
                    </button>
                </div>
            ))}
        </div>
    )
}

export default FollowerCard