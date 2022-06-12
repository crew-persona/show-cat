import Header, {
  HeaderItem,
  HeaderItemFull,
  HeaderSubtitle,
  HeaderTitle,
} from "components/Header";
import Button from "components/Button";
import Container from "components/Container";
import { ListContainer, ListImage, ListItem } from "components/CatList";
import {useGetIpAddress}  from "utill/getIpAddress";
import { useNavigate } from "react-router";
import {  doc, updateDoc } from "firebase/firestore";
import { db } from "config/firebase";
import useGetDocs from "utill/getImages";

export default function Home() {


  const uid = localStorage.getItem("uid");
  const navigate = useNavigate();

  const images = useGetDocs();
  const ipAddress = useGetIpAddress();
  
  const onClickLike = async(data: any) => {
    console.log(data.likeIps)
    
    const ips:string[] = !data.likeIps.includes(ipAddress) ?
    data.likeIps.push(ipAddress) : data.likeIps;
    const cnt = ips.length;
    console.log(cnt)

    await updateDoc(doc(db, "Images", data.id), {
      likeCnt: cnt,
      likeIps:ips
    });
  }
  return (
    <>
      <Header>
        <HeaderItemFull css={{ display: "flex", alignItems: "center" }}>
          <HeaderTitle>이 주의 집사</HeaderTitle>
          <HeaderSubtitle>매 주 진행되는 고양이 자랑 대회</HeaderSubtitle>
        </HeaderItemFull>
        <HeaderItem>
          {(uid === undefined || uid ===null) ? <Button onClick={()=>{navigate('/oauth/sign-in')}} color="primary">로그인</Button> :
           <Button onClick={()=>{navigate('/oauth/sign-out')}} color="primary">로그아웃</Button> }
        </HeaderItem>
      </Header>
      <Container>
        <ListContainer>
          {
            images.documents.map((img) => 
              <ListItem count={{ "@pc": 4, "@mobile": 2 }}>
                 <button onClick={()=>{onClickLike(img)}}>
              <ListImage
                key={img.id}
                src={img.link}
                alt="cat"
              />
              </button>
            </ListItem>
            )
          }
        </ListContainer>
      </Container>
    </>
  );
}
