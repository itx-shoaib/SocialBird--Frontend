import React, { useState, useRef } from 'react'
import "./PostShare.css"
import ProfileImg from "../../img/profileImg.jpg"
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"
import { useSelector,useDispatch } from 'react-redux'
import { uploadImage } from '../../actions/UploadAction'

const PostShare = () => {
    const disptach = useDispatch()
    const user = useSelector((state)=>state.authReducer.authData.user)
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const desc = useRef()

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(img)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newPost = {
            userId:user._id,
            desc : desc.current.value
        }

        if(image){
            const data = new FormData();
            const filename = new Date() + image.name
            data.append("name",filename)
            data.append("file",image)
            newPost.image = filename;
            console.log(newPost)
            try {
                disptach(uploadImage(data))
            } catch (error) {
                console.log(`Error in PostShare.jsx.Error: ${error}`)
            }
        }
    }
    return (
        <div className="PostShare">
            <img src={ProfileImg} alt="" />
            <div>
                <input ref={desc} required type="text" placeholder='Whats happening..' />
                <div className="PostOption">
                    <div className="option"
                        style={{ color: "var(--photo)" }}
                        onClick={() => imageRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option"
                        style={{ color: "var(--video)" }}
                    >
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option"
                        style={{ color: "var(--location)" }}
                    >
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option"
                        style={{ color: "var(--shedule)" }}
                    >
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className="button ps-button"
                    onClick={handleSubmit}
                    >
                        Share
                    </button>
                    <div
                        style={{ display: "none" }}
                    >
                        <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (
                    <div className="previewImage">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostShare