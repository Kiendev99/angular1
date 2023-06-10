import Book from '../models/book';
import { bookSchema } from '../schemas/book';
import paginate from 'mongoose-paginate-v2'

export const create = async (req, res) => {

  const {error} = bookSchema.validate(req.body,{abortEarly: false})
  if(error) {
    return res.status(400).json({
      message: error.details.map(err => err.message)
    })
  }

  try {
    const book = await Book.create(req.body);
    return res.status(200).json({
      message: 'Book created successfully',
      book});
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const update = async (req, res) => {
  const {error} = bookSchema.validate(req.body,{abortEarly: false})
  if(error) {
    return res.status(400).json({
      message: error.details.map(err => err.message)
    })
  }

  try {
    const book = await Book.findOneAndUpdate(req.body.id,req.body,{new:true});
    return res.status(200).json({
      message: 'Book update successfully',
      book});
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const getAll = async (req, res) => {

  const {
    _page= 1,_limit= 20,_sort= "createAC", _order = "asc"
  } = req.query

  const options = {
    page: _page,
    limit: _limit,
    sort: {[_sort]: _order === "desc" ? -1 : 1}
  }

  try {
    const book = await Book.paginate({},options);
    return res.status(200).json({
      book});
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const get = async (req, res) => {
  try {
    const book = await Book.findById(req.body.id);
    return res.status(200).json({
      book});
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}

export const remove = async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({_id: req.body.id});
    return res.status(200).json({
      message: "xóa thành công",
      book});
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })
  }
}