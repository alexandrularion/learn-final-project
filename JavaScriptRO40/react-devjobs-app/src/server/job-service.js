import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { firestoreDatabase } from "./firebase";

const collectionRef = collection(firestoreDatabase, "job");

const jobService = {
  create: async (payload) => {
    try {
      const documentRef = await addDoc(collectionRef, payload);
      console.log(documentRef.id);
    } catch (e) {
      console.error(`[ERROR-FIREBASE]: Create job, ${e}`);
    }
  },
  readByFilters: async (filters = []) => {
    try {
      const result = [];

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
  readById: async (id) => {
    try {
      const docRef = doc(collectionRef, id);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    } catch (e) {
      console.error(`[ERROR-FIREBASE]: Read job by id, ${e}`);
    }
  },
  delete: async (id) => {
    try {
      const docRef = doc(collectionRef, id);
      await deleteDoc(docRef);
    } catch (e) {
      console.error(`[ERROR-FIREBASE]: Delete job, ${e}`);
    }
  },
};

export default jobService;
