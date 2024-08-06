declare module "app-env" {
  interface ENV {
    RETOOL_EMBED_FIREBASE_CONFIG: string;
    RETOOL_EMBED_APP_TITLE: string;
  }

  const appEnv: ENV;
  export default appEnv;
}
