const config = { ...import.meta.env };
const firebaseConfig = JSON.parse(config.RETOOL_EMBED_FIREBASE_CONFIG || "{}");

export default { ...config, firebaseConfig };
