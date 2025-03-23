import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogService } from "./blog.service";


const createBlogIntoDb = catchAsync(async (req, res) => {
    const blog = await blogService.createBlogIntoDb(req?.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Blog created successfully",
        data: blog,
    })
})

const getAllBlogs = catchAsync(async (req, res) => {
    const blog = await blogService.getAllBlogs(req.query);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Blog retrieved successfully",
        data: blog,
    })
})

const getSingleBlogById = catchAsync(async (req, res) => {
    const blog = await blogService.getSingleBlogById(req?.params?.blogId);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Blog retrieved successfully",
        data: blog,
    })
})

const getSingleBlogBySlug = catchAsync(async (req, res) => {
    const blog = await blogService.getSingleBlogBySlug(req?.params?.blogId);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Blog retrieved successfully",
        data: blog,
    })
})

const deleteSingleBlogById = catchAsync(async (req, res) => {
    await blogService.deleteSingleBlogById(req?.params?.blogId);
    sendResponse(res, {
        statusCode: status.NO_CONTENT,
        success: true,
        message: "Blog deleted successfully",
        data: null,
    })
})

const updateSingleBlogById = catchAsync(async (req, res) => {
    const updatedBlog = await blogService.updateSingleBlogById(req?.params?.blogId, req?.body);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Blog updated successfully",
        data: updatedBlog,
    })
})

export const blogController = {
    createBlogIntoDb,
    getAllBlogs,
    getSingleBlogBySlug,
    getSingleBlogById,
    deleteSingleBlogById,
    updateSingleBlogById
}