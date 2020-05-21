import Bugsnag from '@bugsnag/js';
import {Injectable} from '@nestjs/common';

import {BugsnagClient, BugsnagModuleOptions} from './bugsnag.interfaces';

@Injectable()
export class BugsnagService {

    private readonly _instance: BugsnagClient;

    constructor(options: BugsnagModuleOptions) {
        this._instance = Bugsnag.createClient(options);
    }

    get instance(): BugsnagClient {
        return this._instance;
    }
}
