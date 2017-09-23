import { Injectable } from '@angular/core';

@Injectable()
export class LogChildService {

  constructor() { }

  log(msg: string) {
    console.log(`Log Child Service ${msg}`);
  }

}
