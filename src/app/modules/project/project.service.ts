import status from 'http-status';
import AppError from '../../errors/AppError';
import { TProject } from './project.interface';
import { Project } from './project.model';
import slugify from 'slugify';
import QueryBuilder from '../../builders/QueryBuilder';

const createProjectIntoDb = async (payload: TProject) => {
  let slug = slugify(payload.name, { lower: true, strict: true });
  let counter = 1;

  while (await Project.findOne({ slug })) {
    slug = slugify(payload.name, { lower: true, strict: true }) + `-${counter}`;
    counter++;
  }

  payload.slug = slug;

  const result = await Project.create(payload);
  return result;
};

const getAllProjects = async (query: Record<string, unknown>) => {
  const projectQuery = new QueryBuilder(Project.find(), query)
    .search(['name'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await projectQuery.modelQuery;
  const meta = await projectQuery.countTotal();
  return { result, meta };
};

const getSingleProjectById = async (projectId: string) => {
  const project = await Project.findById(projectId);
  if (!project) {
    throw new AppError(status.NOT_FOUND, 'Project not found!');
  }
  return project;
};

const deleteSingleProjectById = async (projectId: string) => {
  const project = await Project.findByIdAndDelete(projectId);
  if (!project) {
    throw new AppError(status.NOT_FOUND, 'Project not found!');
  }
  return project;
};

const updateSingleProjectById = async (
  projectId: string,
  payload: Partial<TProject>,
) => {
  if (payload.name) {
    let slug = slugify(payload.name, { lower: true, strict: true });
    let counter = 1;

    while (await Project.findOne({ slug })) {
      slug =
        slugify(payload.name, { lower: true, strict: true }) + `-${counter}`;
      counter++;
    }

    payload.slug = slug;
  }

  const project = await Project.findByIdAndUpdate(projectId, payload, {
    new: true,
  });
  if (!project) {
    throw new AppError(status.NOT_FOUND, 'Project not found!');
  }
  return project;
};

export const projectService = {
  createProjectIntoDb,
  getAllProjects,
  getSingleProjectById,
  deleteSingleProjectById,
  updateSingleProjectById,
};
