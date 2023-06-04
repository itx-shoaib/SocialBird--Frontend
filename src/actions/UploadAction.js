export const uploadImage=(data)=>async(dispatch)=>{
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        conosle.log(`Error in UploadAction/uploadImage. Error: ${error}`)
    }
}