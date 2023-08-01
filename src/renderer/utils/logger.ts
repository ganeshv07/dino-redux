import { appConfig } from './../config/app_config';
//import { utility } from './index';

class Logger {
    info(...params:any) {
        if (appConfig.logLevel === 'info') {
            console.log.apply(console, params);
        }
    }
    debug(...params:any) {
        if (appConfig.logLevel === 'debug') {
            console.log.apply(console, params);
        }
    }
    error(error: Error | any, ...params:any) {
        if (error.data && error.data.Message) {
            // utility.alert({ message: error.data.Message });
        } else if (error.data) {
            if (typeof error.data === 'string') {
                //   utility.alert({ message: error.data });
            } else {
                if (error.data.message) {
                    //    utility.alert({ message: error.data.message });
                } else {
                    //   utility.alert({ message: JSON.stringify(error.data) });
                }
            }
        } else {
            // utility.alert({ message: error.message });
        }
        console.error.apply(console, [error].concat(params));
    }
}

export const logger = new Logger();
