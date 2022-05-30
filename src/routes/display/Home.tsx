import Header, {
  HeaderItem,
  HeaderItemFull,
  HeaderSubtitle,
  HeaderTitle,
} from "components/Header";
import Button from "components/Button";
import Container from "components/Container";
import { ListContainer, ListImage, ListItem } from "components/CatList";

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
      <Container>
        <ListContainer>
          <ListItem count={{ "@pc": 4, "@mobile": 2 }}>
            <ListImage
              src={`https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834`}
              alt="cat"
            />
          </ListItem>
          <ListItem count={{ "@pc": 4, "@mobile": 2 }}>
            <ListImage
              src={`https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834`}
              alt="cat"
            />
          </ListItem>
          <ListItem count={{ "@pc": 4, "@mobile": 2 }}>
            <ListImage
              src={`https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834`}
              alt="cat"
            />
          </ListItem>
        </ListContainer>
      </Container>
    </>
  );
}
