declare module '@capacitor/core' {
  interface PluginRegistry {
    AppVersion: AppVersionPlugin;
  }
}

export interface AppVersionPlugin {
  getVersionNumber(): Promise<{ value: string }>;
  getAppBuildNumber(): Promise<{ value: string }>;
}
