import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectService } from "./project.service";


const createProjectIntoDb = catchAsync(async (req, res) => {
    const project = await projectService.createProjectIntoDb(req?.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Project created successfully",
        data: project,
    })
})

const getAllProjects = catchAsync(async (req, res) => {
    const projects = await projectService.getAllProjects(req.query);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Projects retrieved successfully",
        data: projects,
    })
})

const getSingleProjectById = catchAsync(async (req, res) => {
    const project = await projectService.getSingleProjectById(req?.params?.id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Project retrieved successfully",
        data: project,
    })
})


const deleteSingleProjectById = catchAsync(async (req, res) => {
    await projectService.deleteSingleProjectById(req?.params?.id);
    sendResponse(res, {
        statusCode: status.NO_CONTENT,
        success: true,
        message: "Project deleted successfully",
        data: null,
    })
})

const updateSingleProjectById = catchAsync(async (req, res) => {
    const updatedProject = await projectService.updateSingleProjectById(req?.params?.id, req?.body);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Project updated successfully",
        data: updatedProject,
    })
})

export const projectController = {
    createProjectIntoDb,
    getAllProjects,
    getSingleProjectById,
    deleteSingleProjectById,
    updateSingleProjectById
}