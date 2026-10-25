import axiosService from "../api/axiosService";

// Save resume API : called by ResumeInput component when finish button clicks

export const saveResumeApi = async (resumeDetails)=>{

    return await axiosService("POST","/resumes",resumeDetails)
}


// view resume API : called by view component when the page loads in browser

export const viewResumeApi = async (resumeId)=>{

    return await axiosService("GET",`/resumes/${resumeId}`,{})
}