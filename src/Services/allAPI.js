
import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

// save video
export const addVideoAPI = async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// get video
export const getAllVideoAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

// remove video by videocard component 
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${videoId}`,{})
}