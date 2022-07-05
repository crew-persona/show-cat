import { useRef } from "react";
import Header, {
  HeaderItem,
  HeaderItemFull,
  HeaderSubtitle,
  HeaderTitle,
} from "components/Header";
import useOnScreen from "hooks/useOnScreen";
import {
  Button,
  ButtonGroup,
  ButtonGroupItem,
  ButtonGroupItemFull,
} from "components/Button";
import { ReactComponent as Write } from "@assets/icons/write.svg";
import Container from "components/Container";
import StyledLink from "components/StyledLink";
import { Outlet, useLocation } from "react-router-dom";
import { css } from "@styles/stitches.config";

const Home = () => {
  const navButtonGroupRef = useRef<HTMLUListElement>(null);
  const isNavButtonGroupOnScreen = useOnScreen(navButtonGroupRef, {
    rootMargin: "-60px 0px 0px 0px",
    threshold: 0,
  });
  const { pathname } = useLocation();
  const writeIconStyles = css({
    "@mobile": {
      display: "none",
    },
  });

  return (
    <Container>
      <Header>
        <HeaderItemFull
          css={{
            alignItems: "center",
            "@mobile": {
              display: isNavButtonGroupOnScreen ? "flex" : "none",
            },
          }}
        >
          <HeaderTitle>이 주의 집사</HeaderTitle>
          <HeaderSubtitle>매 주 진행되는 고양이 자랑 대회</HeaderSubtitle>
        </HeaderItemFull>
        <HeaderItem>
          {isNavButtonGroupOnScreen ? (
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
      <ButtonGroup ref={navButtonGroupRef}>
        <ButtonGroupItemFull
          align={{
            "@pc": "center",
          }}
        >
          <StyledLink to="/" underline={false}>
            <Button
              css={{
                "@pc": {
                  width: "240px",
                },
              }}
              className={pathname === "/" ? "active" : ""}
            >
              🐱 도전자
            </Button>
          </StyledLink>
          <StyledLink to="best-cats" underline={false}>
            <Button
              css={{
                "@pc": {
                  width: "240px",
                },
              }}
              className={pathname === "/best-cats" ? "active" : ""}
            >
              🏆 명예의전당
            </Button>
          </StyledLink>
        </ButtonGroupItemFull>
        <ButtonGroupItem>
          <Button
            color="primary"
            iconAlign="left"
            css={{
              "@mobile": {
                padding: "10px 12px",
              },
            }}
          >
            <Write fill="white" className={writeIconStyles()} />
            참여하기
          </Button>
        </ButtonGroupItem>
      </ButtonGroup>
      <Outlet />
    </Container>
  );
};

export default Home;
