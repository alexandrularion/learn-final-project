function createServerVariables() {
  const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
  const DATABASE_URL = import.meta.env.VITE_DATABASE_URL; // needed for normal queries
  const FIREBASE_API_URL = import.meta.env.VITE_FIREBASE_API_URL; // needed for AUTH

  return {
    FIREBASE_API_KEY,
    DATABASE_URL,
    FIREBASE_API_URL,
  };
}

export default createServerVariables;
