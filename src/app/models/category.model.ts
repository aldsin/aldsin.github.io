import { Algorithm } from './algorithm.model';

export interface Category {
  id?: string;
  name?: string;
  description?: string;
  algorithmSet?: Algorithm[];
}
