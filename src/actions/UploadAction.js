import * as UploadApi from "../api/UploadRequest"

export const uploadImage=(data)=>async(dispatch)=>{
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(`Error in UploadAction/uploadImage. Error: ${error}`)
    }
}