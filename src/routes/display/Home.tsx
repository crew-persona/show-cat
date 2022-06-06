import { useRef } from "react";
import Header, {
  HeaderItem,
  HeaderItemFull,
  HeaderSubtitle,
  HeaderTitle,
} from "components/Header";
import Container from "components/Container";
import { ListContainer, ListImage, ListItem } from "components/CatList";
import useOnScreen from "hooks/useOnScreen";
import {
  Button,
  ButtonGroup,
  ButtonGroupItem,
  ButtonGroupItemFull,
} from "components/Button";
import { ReactComponent as Write } from "@assets/icons/write.svg";

export default function Home() {
  const uid = localStorage.getItem("uid");
  const buttonGroupRef = useRef<HTMLUListElement>(null);
  const isButtonGroupOnScreen = useOnScreen(buttonGroupRef);

  return (
    <>
      <Header>
        <HeaderItemFull css={{ display: "flex", alignItems: "center" }}>
          <HeaderTitle>이 주의 집사</HeaderTitle>
          <HeaderSubtitle>매 주 진행되는 고양이 자랑 대회</HeaderSubtitle>
        </HeaderItemFull>
        <HeaderItem>
          {isButtonGroupOnScreen ? (
            <Button color="primary">로그인</Button>
          ) : (
            <ButtonGroup>
              <ButtonGroupItem>
                <Button>🐱 도전자</Button>
              </ButtonGroupItem>
              <ButtonGroupItem>
                <Button>🏆 명예의전당</Button>
              </ButtonGroupItem>
            </ButtonGroup>
          )}
        </HeaderItem>
      </Header>
      <Container>
        <ButtonGroup ref={buttonGroupRef}>
          <ButtonGroupItemFull
            align={{
              "@pc": "center",
            }}
          >
            <Button
              css={{
                "@pc": {
                  width: "240px",
                },
              }}
            >
              🐱 도전자
            </Button>
            <Button
              css={{
                "@pc": {
                  width: "240px",
                },
              }}
            >
              🏆 명예의전당
            </Button>
          </ButtonGroupItemFull>
          <ButtonGroupItem>
            <Button color="primary" iconAlign="left">
              <Write fill="white" />
              참여하기
            </Button>
          </ButtonGroupItem>
        </ButtonGroup>
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
