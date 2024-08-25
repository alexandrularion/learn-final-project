import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
  query,
  where,
} from "firebase/firestore";
import { firestoreDatabase } from "./firebase";

const jobService = {
  create: async (payload) => {
    try {
      const collectionRef = collection(firestoreDatabase, "job");
      const documentRef = await addDoc(collectionRef, payload);
      console.log(documentRef.id);
    } catch (e) {
      console.error(`[ERROR-FIREBASE]: Create job, ${e}`);
    }
  },
  readByFilters: async (filters) => {
    try {
      const result = [];

      const collectionRef = collection(firestoreDatabase, "job");
      const q = query(
        collectionRef,
        ...filters.map((f) => where(f.field, f.op, f.value))
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((document) => {
        result.push({ id: document.id, ...document.data() });
      });

      return result;
    } catch (e) {
      console.error(`[ERROR-FIREBASE]: Read jobs by filters, ${e}`);
    }
  },
  delete: async (id) => {
    try {
      const collectionRef = collection(firestoreDatabase, "job");
      const docRef = doc(collectionRef, id);
      await deleteDoc(docRef);
    } catch (e) {
      console.error(`[ERROR-FIREBASE]: Delete job, ${e}`);
    }
  },
};

export default jobService;
