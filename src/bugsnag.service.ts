import Bugsnag  from '@bugsnag/js';
import { Injectable } from '@nestjs/common';

import { BugsnagModuleOptions, BugsnagClient } from './bugsnag.interfaces';

@Injectable()
export class BugsnagService {

  get instance(): BugsnagClient {
    return this._instance;
  }

  private readonly _instance: BugsnagClient;

  constructor(options: BugsnagModuleOptions) {
    this._instance = Bugsnag.createClient(options);
  }
}
