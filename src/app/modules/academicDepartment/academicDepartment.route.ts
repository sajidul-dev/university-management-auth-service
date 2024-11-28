import express from 'express';
import validateRequest from '../../middlewires/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(AcademicDepartmentValidation.createDepartmentZodSchema),
  AcademicDepartmentController.createAcademicDepartment,
);

router.patch(
  '/:id',
  validateRequest(AcademicDepartmentValidation.updateDepartmentZodSchema),
  AcademicDepartmentController.updateAcademicFaculty,
);

router.delete('/:id', AcademicDepartmentController.deleteFaculty);
router.get('/:id', AcademicDepartmentController.getSingleAcademicFaculty);

router.get('/', AcademicDepartmentController.getAcademicFaculty);

export const AcademicDeparmentRoutes = router;
