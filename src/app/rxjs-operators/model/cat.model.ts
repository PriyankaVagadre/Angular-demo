import { CatChild } from './cat-child.model';

export interface Cats {
  name : string,
  gender : string,
  cat_id : string
  cat_child : CatChild[];
}
