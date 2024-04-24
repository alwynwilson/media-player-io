
import commonAPI from "./commonAPI";
import SERVER_URL from "./server_url";

// save video
export const addVideoAPI = async (video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}