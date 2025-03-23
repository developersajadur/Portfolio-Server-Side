import status from 'http-status';
import AppError from '../../errors/AppError';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';
import slugify from 'slugify';
import QueryBuilder from '../../builders/QueryBuilder';

const createBlogIntoDb = async (payload: TBlog) => {
  let slug = slugify(payload.name, { lower: true, strict: true });
  let counter = 1;

  while (await Blog.findOne({ slug })) {
    slug = slugify(payload.name, { lower: true, strict: true }) + `-${counter}`;
    counter++;
  }

  payload.slug = slug;

  const result = await Blog.create(payload);
  return result;
};

const getAllBlogs = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find(), query)
    .search(['name'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await blogQuery.modelQuery;
  const meta = await blogQuery.countTotal();
  return { result, meta };
};

const getSingleBlogBySlug = async (slug: string) => {
  const blog = await Blog.findOne({slug});
  if (!blog) {
    throw new AppError(status.NOT_FOUND, 'Blog not found!');
  }
  return blog;
};

const getSingleBlogById = async (blogId: string) => {
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw new AppError(status.NOT_FOUND, 'Blog not found!');
  }
  return blog;
};

const deleteSingleBlogById = async (blogId: string) => {
  const blog = await Blog.findByIdAndDelete(blogId);
  if (!blog) {
    throw new AppError(status.NOT_FOUND, 'Blog not found!');
  }
  return blog;
};

const updateSingleBlogById = async (
  blogId: string,
  payload: Partial<TBlog>,
) => {
  if (payload.name) {
    let slug = slugify(payload.name, { lower: true, strict: true });
    let counter = 1;

    while (await Blog.findOne({ slug })) {
      slug =
        slugify(payload.name, { lower: true, strict: true }) + `-${counter}`;
      counter++;
    }

    payload.slug = slug;
  }

  const blog = await Blog.findByIdAndUpdate(blogId, payload, {
    new: true,
  });
  if (!blog) {
    throw new AppError(status.NOT_FOUND, 'Blog not found!');
  }
  return blog;
};

export const blogService = {
  createBlogIntoDb,
  getAllBlogs,
  getSingleBlogBySlug,
  getSingleBlogById,
  deleteSingleBlogById,
  updateSingleBlogById,
};
