import { Language } from './language.model';
import { Algorithm } from './algorithm.model';

export class Code {
  id?: string;
  algo: Algorithm;
  content: string;
  lang: Language;
}
