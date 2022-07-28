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
import Text from "components/Text";

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
  const writeButtonTextStyles = css({
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
          css={{
            "@mobile": {
              flex: isNavButtonGroupOnScreen ? "" : "1 1 auto",
            },
          }}
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
                css={{
                  flex: isNavButtonGroupOnScreen ? "" : "1 1 auto",
                  justifyContent: isNavButtonGroupOnScreen ? "" : "flex-end",
                }}
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
            {/* PC Text */}
            <Text
              css={{
                "@mobile": {
                  display: "none",
                },
                margin: 0,
              }}
            >
              🐱 도전자
            </Text>
            {/* Mobile Text */}
            <Text
              css={{
                "@pc": {
                  display: "none",
                },
                margin: 0,
              }}
            >
              도전자
            </Text>
          </Button>
          <Button
            css={{
              "@pc": {
                width: "240px",
              },
            }}
            as={Link}
            to="/best-cats"
            active={
              pathname === "/best-cats" || pathname === "/best-cats/prev-week"
            }
          >
            <Text
              css={{
                "@mobile": {
                  display: "none",
                },
              }}
            >
              🏆 명예의전당
            </Text>
            <Text
              css={{
                "@pc": {
                  display: "none",
                },
              }}
            >
              명예의전당
            </Text>
          </Button>
        </ButtonGroupItemFull>
        <ButtonGroupItem>
          <Button
            color="primary"
            iconAlign="left"
            iconOnly={{
              "@mobile": true,
            }}
          >
            <Write fill="white" />
            <span className={writeButtonTextStyles()}>참여하기</span>
          </Button>
        </ButtonGroupItem>
      </ButtonGroup>
      <Outlet />
    </Container>
  );
};

export default Home;
