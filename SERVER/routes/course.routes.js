import { Router } from 'express';
import { addLectureToCourseById,removeCourse,updateCourse,createCourse,getLecturesByCourseId,getAllCourses } from '../controllers/course.controller.js';
import { isLoggedIn } from '../middlewares/auth.middleware.js';
import upload from '../middlewares/multer.middleware.js'
import { authorizeRoles } from '../middlewares/auth.middleware.js';

const router = Router();
router.route('/').get(getAllCourses).post( isLoggedIn, authorizeRoles('ADMIN'), upload.single("thumbnail"),createCourse);
router.route('/:id').get(isLoggedIn, getLecturesByCourseId).put(isLoggedIn, authorizeRoles('ADMIN'), updateCourse).delete(isLoggedIn, authorizeRoles('ADMIN'), removeCourse).post(isLoggedIn,authorizeRoles('ADMIN'),upload.single('lecture'), addLectureToCourseById);
export default router;