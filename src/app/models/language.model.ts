import { Algorithm } from './algorithm.model';
import { Code } from './code.model';

export class Language {
  id?: string;
  langName?: string;
  algorithmSet: Algorithm[];
  codeSet: Code[];
}
