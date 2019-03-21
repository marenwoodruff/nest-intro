import { Injectable, Optional, Inject } from '@nestjs/common';

// @Injectable()
// export class HttpService<T> {
//   constructor(
//     @Optional() @Inject('HTTP_OPTIONS') private readonly httpClient: T,
//   ) {}
// }

export interface Cat {
  name: string;
  age: number;
  breed: string;
}