import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  startAfter,
  limit,
} from "firebase/firestore";
import { firestoreDatabase } from "./firebase";

const collectionRef = collection(firestoreDatabase, "job");
let lastDocument = null;

const jobService = {
  create: async (payload) => {
    try {
      const documentRef = await addDoc(collectionRef, payload);
      console.log(documentRef.id);
    } catch (e) {
      console.error(`[ERROR-FIREBASE]: Create job, ${e}`);
    }
  },
  readByFilters: async (filters = [], shouldLoadMore = false) => {
    try {
      const result = [];

      let q = query(
        collectionRef,
        ...filters.map((f) => where(f.field, f.op, f.value)),
        limit(6)
      );

      if (shouldLoadMore && lastDocument) {
        q = query(
          collectionRef,
          ...filters.map((f) => where(f.field, f.op, f.value)),
          startAfter(lastDocument),
          limit(6)
        );
      }

      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length === 0) {
        console.warn("[WARNING-FIREBASE]: No more documents to load.");
        return result;
      }

      querySnapshot.forEach((document) => {
        result.push({ id: document.id, ...document.data() });
      });

      lastDocument = querySnapshot.docs[querySnapshot.docs.length - 1];

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
