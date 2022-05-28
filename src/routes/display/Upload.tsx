
import { db } from "config/firebase";
import { useRecoilValue } from 'recoil';
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteField } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { authAtom } from "recoil/atoms/authAtom";
import { useEffect } from "react";
import { getAuth } from "@firebase/auth";

const onChange = () => {
  console.log('onChange')
  fetch("https://api.imgur.com/3/image/", {
    method: "post",
    headers: {
        Authorization: "Client-ID 6db47bd7029562d"
    },
  }).then(data => data.json()).then(data => {
    insertImage(data.data.link);
    console.log(data.data.link);
  })
  insertImage("data.data.link");
}
const insertImage = async(ImageUrl:string) => {
  try {
    const auth=getAuth();console.log(auth)
    const docRef = await addDoc(collection(db, "Image"), {
      email:auth.currentUser?.email,
      link: ImageUrl
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const selectImage = async() => {
  const imageCollectionRef = collection(db, 'Image');
  getDocs(imageCollectionRef).then((querySnapshot) => {
    querySnapshot.docs.map((doc) => console.log('Image:', doc.data()))
  });

  return <input type="file" id="file" onChange={onChange} accept="image/*"/>
}
export default function UploadFile() {
  const navigate = useNavigate();
  const uid = useRecoilValue(authAtom);
  useEffect(() => {
    if(uid===null || uid===undefined){
      console.log("해당 유저를 찾을 수 없습니다. ")
      navigate("/oauth/sign-in");
    }
  }, [uid]);
  console.log(uid);
  selectImage();
  return (<input type="file" id="file" onChange={onChange} accept="image/*"/>)
}
