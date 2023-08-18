import axiosInstance from "../axios";
import { IProjectForm } from "../../interface";


export function getAllProjects() {
  return axiosInstance.get('/project');
}

export function editProject(userInput: any, projectId: number) {
  return axiosInstance.put(`/project/${projectId}`, userInput);
}
