import { Language } from './language.model';
import { Category } from './category.model';
import { Code } from './code.model';

export class Algorithm {
  id?: string;
  name?: string;
  description?: string;
  langs?: Language[];
  createdAt?: Date;
  updatedAt?: Date;
  category?: Category;
  codeSet?: Code[];
}
