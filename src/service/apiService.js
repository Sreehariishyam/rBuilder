import axiosService from "../api/axiosService";

// Save resume API : called by ResumeInput component when finish button clicks
export const saveResumeApi = async (resumeDetails)=>{
    return await axiosService("POST","/resumes",resumeDetails)
}

// view resume API : called by view component when the page loads in browser
export const viewResumeApi = async (resumeId)=>{
    return await axiosService("GET",`/resumes/${resumeId}`,{})
}

// view all resume API : called by saved component when the page loads in browser
export const getAllResumeApi = async ()=>{
    return await axiosService("GET",`/resumes/`,{})
}

// view all resume API : called by saved component when the page loads in browser
export const deleteAllResumeApi = async (resumeId)=>{
    return await axiosService("DELETE",`/resumes/${resumeId}`,{})
}

// update all resume API : called by saved component when the page loads in browser
export const editAllResumeApi = async (resumeId,resumeDetails)=>{
    return await axiosService("PUT",`/resumes/${resumeId}`,resumeDetails)
}

// Download resume API : called by view component when download button clicks
export const downloadResumeApi = async (resumeDetails)=>{
    return await axiosService("POST",`/downloads/`,resumeDetails)
}

// get Download resumes API : called by download component when page loads in browser
export const getAllDownloadResumeApi = async ()=>{
    return await axiosService("GET",`/downloads/`,{})
}