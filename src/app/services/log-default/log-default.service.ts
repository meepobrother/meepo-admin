import { Injectable } from '@angular/core';

@Injectable()
export class LogDefaultService {

  constructor() { }

  log(msg: string) {
    console.log(`LogDefaultService ${msg}`);
  }

}
