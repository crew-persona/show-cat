
import { db } from "config/firebase";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const onChange = () => {
  console.log('onChange')
  fetch("https://api.imgur.com/3/image/", {
    method: "post",
    headers: {
        Authorization: "Client-ID 6db47bd7029562d"
    },
  }).then(data => data.json()).then(data => {
    insertDB(data.data.link);
    console.log(data.data.link);
  })
}
const insertDB = async(ImageUrl:string) => {
  try {
    const uid = localStorage.getItem("uid");
    const docRef = await addDoc(collection(db, "Image"), {
      link: ImageUrl
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default function UploadFile() {

  const user = getAuth().currentUser;

  return <input type="file" id="file" onChange={onChange} accept="image/*"/>}