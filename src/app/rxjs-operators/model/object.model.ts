import { Human } from './human.model';
import { Dogs } from './dog.model';
import { Cats } from './cat.model';

export interface RxjsObj {
  humans : Human[],
  dogs : Dogs[],
  cats : Cats[]
}
