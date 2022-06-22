/* eslint-disable react-hooks/rules-of-hooks */

import { db } from "config/firebase";
import { useRecoilValue } from 'recoil';
import { setDoc, doc, FieldValue } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { authAtom } from "recoil/atoms/authAtom";
import { useEffect } from "react";
import { getAuth } from "@firebase/auth";
import useGetDocs from "utill/getImages";
import { v4 as uuidv4 } from 'uuid';
import { useGetIpAddress } from "utill/getIpAddress";


export default function UploadFile() {
  
  const navigate = useNavigate();
  const uid = useRecoilValue(authAtom);
  
  const images = useGetDocs();
  console.log(images);

  const ipAddress = useGetIpAddress();
  const array = [ipAddress]
  const onChange = () => {
    console.log('onChange')
    /*
    fetch("https://api.imgur.com/3/image/", {
      method: "post",
      headers: {
          Authorization: "Client-ID 6db47bd7029562d"
      },
    }).then(data => data.json()).then(data => {
      insertImage(data.data.link);
      console.log(data.data.link);
    })

    */
    insertImage("https://i.imgur.com/AD3MbBi.jpeg");
  }
const insertImage = async(ImageUrl:string) => {
  try {
    console.log('insertImage')
    const auth=getAuth();
    console.log(auth);
    const uuid = uuidv4()

    await setDoc(doc(db, "Images", uuid),  {
      id:uuid,
      email:auth.currentUser?.email,
      link: ImageUrl,
      likeCnt:1,
      likeIps:array
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
  useEffect(() => {
    if(uid===null || uid===undefined){
      console.log("해당 유저를 찾을 수 없습니다. ")
      navigate("/oauth/sign-in");
    }
  }, [uid]);
  console.log(uid);
  return (
    <>
      <input type="file" id="file" onChange={onChange} accept="image/*"/>
      <div>
        {images.documents.map((img) => 
        <>
          <img key={img.id} src={img.link} alt='img'/>
        </>)} 
      </div>
    </>
  )
}

 