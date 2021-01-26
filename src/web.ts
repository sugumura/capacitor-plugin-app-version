import { WebPlugin } from '@capacitor/core';
import { AppVersionPlugin } from './definitions';

export class AppVersionWeb extends WebPlugin implements AppVersionPlugin {
  constructor() {
    super({
      name: 'AppVersion',
      platforms: ['web'],
    });
  }
  async getVersionNumber(): Promise<{ value: string }> {
    console.log('getVersionNumber');
    return { value: 'Not Yet Implemented'} ;
  }
  async getAppBuildNumber(): Promise<{ value: string }> {
    console.log('getAppBuildNumber');
    return { value: 'Not Yet Implemented'} ;
  }
}

const AppVersion = new AppVersionWeb();

export { AppVersion };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AppVersion);
