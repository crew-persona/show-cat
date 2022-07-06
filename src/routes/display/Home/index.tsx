import { useRef } from "react";
import Header, {
  HeaderItem,
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
import { Link, Outlet, useLocation } from "react-router-dom";
import { css, theme } from "@styles/stitches.config";

const Home = () => {
  const navButtonGroupRef = useRef<HTMLUListElement>(null);
  const isNavButtonGroupOnScreen = useOnScreen(navButtonGroupRef, {
    rootMargin: "-60px 0px 0px 0px",
    threshold: 0,
  });
  const { pathname } = useLocation();
  const writeHeaderIconStyles = css({
    "@pc": {
      width: 21,
      height: 21,
    },
    "@mobile": {
      width: 16,
      height: 16,
    },
  });
  const writeButtonIconStyles = css({
    "@mobile": {
      display: "none",
    },
  });

  return (
    <Container>
      <Header>
        <HeaderItem
          full={true}
          css={{
            alignItems: "center",
            "@mobile": {
              display: isNavButtonGroupOnScreen ? "flex" : "none",
            },
          }}
        >
          <HeaderTitle>이 주의 집사</HeaderTitle>
          <HeaderSubtitle>매 주 진행되는 고양이 자랑 대회</HeaderSubtitle>
        </HeaderItem>
        <HeaderItem
          css={
            isNavButtonGroupOnScreen
              ? {}
              : {
                  "@mobile": {
                    flex: "1 1 auto",
                  },
                }
          }
        >
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
              <ButtonGroupItem
                css={
                  isNavButtonGroupOnScreen
                    ? {}
                    : {
                        "@mobile": {
                          flex: "1 1 auto",
                          justifyContent: "flex-end",
                        },
                      }
                }
              >
                <Button as={Link} to="/" iconOnly={true}>
                  <Write
                    fill={theme.colors.blue}
                    className={writeHeaderIconStyles()}
                  />
                </Button>
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
          <Button
            css={{
              "@pc": {
                width: "240px",
              },
            }}
            as={Link}
            to="/"
            active={pathname === "/"}
          >
            🐱 도전자
          </Button>
          <Button
            css={{
              "@pc": {
                width: "240px",
              },
            }}
            as={Link}
            to="/best-cats"
            active={pathname === "/best-cats"}
          >
            🏆 명예의전당
          </Button>
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
            <Write fill="white" className={writeButtonIconStyles()} />
            참여하기
          </Button>
        </ButtonGroupItem>
      </ButtonGroup>
      <Outlet />
    </Container>
  );
};

export default Home;
