import Header, {
  HeaderItem,
  HeaderItemFull,
  HeaderSubtitle,
  HeaderTitle,
} from "components/Header";
import Button from "components/Button";
import Container from "components/Container";

export default function Home() {
  const uid = localStorage.getItem("uid");
  return (
    <>
      <Header>
        <HeaderItemFull css={{ display: "flex", alignItems: "center" }}>
          <HeaderTitle>이 주의 집사</HeaderTitle>
          <HeaderSubtitle>매 주 진행되는 고양이 자랑 대회</HeaderSubtitle>
        </HeaderItemFull>
        <HeaderItem>
          <Button color="primary">로그인</Button>
        </HeaderItem>
      </Header>
      <Container></Container>
    </>
  );
}
