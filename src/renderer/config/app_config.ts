
// class AppConfig {
//     AuthToken: string;
//     logLevel: string;

//     constructor() {
//         this.logLevel = 'info';
//     }

//     updateToken(token) {
//         this.AuthToken = token;
//     }
// }

// export const appConfig = new AppConfig();

class AppConfig {
    AuthToken: string | undefined;
    logLevel: string;
    lang: string;
    timezone: string;
    source: number;
    deviceType: string;
    appVertion: string;
    isConsoleSearchTestData: boolean;

    constructor() {
        this.logLevel = 'info';
        this.lang = 'en';
        this.timezone = '-330';
        this.source = 8;
        this.deviceType = 'WEB';
        this.appVertion = '1.0.8';
        this.isConsoleSearchTestData = false;
    }

    updateToken(token:any) {
        this.AuthToken = token;
    }
}

export const appConfig = new AppConfig();
