import { AutocompleteOptions } from '../../interface/autocomplete-options.interface';
import { callbackFn } from '../../interface/callback.type';
import { AutocompleteResult } from './autocomplete-result';

export interface CAutocomplete {
  new (opts?: AutocompleteOptions): Autocomplete;
}

export interface Autocomplete {
  search(keyword: string, callback: callbackFn<AutocompleteResult>);
  setType(type: string);
  setCity(city: string);
  setCityLimit(limit: boolean);
}
