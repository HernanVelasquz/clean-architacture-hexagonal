import { GetAllProductsUseCase } from './getAllPersonUseCase';
import { GetByIdPersonUseCase } from './getByIdPersonUseCase';
import { CreatePersonUseCase } from './createPersonUseCase';
import { UpdatePersonUseCase } from './updatePersonUseCase';
import { DeletePersonUseCase } from './deletePersonUseCase';

export const useCase = [
  GetAllProductsUseCase,
  GetByIdPersonUseCase,
  CreatePersonUseCase,
  DeletePersonUseCase,
];
