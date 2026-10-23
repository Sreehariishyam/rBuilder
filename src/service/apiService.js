import axiosService from "../api/axiosService";

// Save resume AP : called by ResumrInput component when finish button clicks

export const saveResumeApi = async (resumeDetails)=>{

    return await axiosService("POST","/resumes",resumeDetails)
}