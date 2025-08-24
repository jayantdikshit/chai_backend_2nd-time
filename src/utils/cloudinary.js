import { v2 as cloudinary } from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET
});


const uploadOnCloudinary = async(localaFilePath) => {
    try {
        if (!localaFilePath) return null //pload the file on cloudinary
        const response = await cloudinary.uploader.upload(localaFilePath, {
                resource_type: "auto"
            })
            //file has been upload successfully
        console.log("file is uploaded on cloudinary", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localaFilePath) // remove the locally saved temporary file as the upload operations got failed
        return null;
    }
}



export { uploadOnCloudinary }