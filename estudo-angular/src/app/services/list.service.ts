import { Injectable } from '@angular/core';
import { Register } from '../Register';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(registers: Register[], register: Register){
    return registers.filter((r) => register.id !== r.id);
  }

}
