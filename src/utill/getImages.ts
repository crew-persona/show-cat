import { useEffect, useState } from "react";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "config/firebase";

const useGetDocs = () => {
    const [documents, setDocuments] = useState<{ [x: string]: any; }[]>([]);

    //Firebase Collection Reference
    const postCollectionRef = collection(db, 'Image');

    useEffect(() => {
        const getDocuments = async () => {
            const data = await getDocs(postCollectionRef);
            setDocuments(data.docs.map((doc) => (
                {...doc.data()})));
        };
        console.log(getDocuments())
        getDocuments();
    }, []);

    return { documents };
}
 
export default useGetDocs;