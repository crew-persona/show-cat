import { Button } from "components/Button";
import { ReactComponent as Back } from "@assets/icons/back.svg";
import { ReactComponent as Write } from "@assets/icons/write.svg";
import { ListContainer } from "components/CatList";
import Container from "components/Container";
import Header, { HeaderItem } from "components/Header";
import DetailListItem from "components/DetailListItem";
import { Link } from "react-router-dom";
import { css, theme } from "@styles/stitches.config";

const Detail = () => {
  const writeIconStyles = css({
    "@pc": {
      width: 21,
      height: 21,
    },
    "@mobile": {
      width: 16,
      height: 16,
    },
  });

  return (
    <Container>
      <Header>
        <HeaderItem full={true}>
          <Button
            css={{
              dipslay: "flex",
              paddingLeft: 0,
              paddingRight: 0,
            }}
            as={Link}
            to="/"
          >
            <Back width="16" height="16" style={{ marginRight: "6px" }} />
            <Button as="div" active={true}>
              🐱 도전자
            </Button>
          </Button>
        </HeaderItem>
        <HeaderItem>
          <Button as={Link} to="/" iconOnly={true}>
            <Write fill={theme.colors.blue} className={writeIconStyles()} />
          </Button>
        </HeaderItem>
      </Header>
      <ListContainer
        fullWidth={{ "@mobile": true }}
        css={{ marginTop: "32px" }}
      >
        <DetailListItem
          initialLiked={false}
          initialLikedCount={120}
          src={`https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834`}
          alt="cat"
        />
      </ListContainer>
    </Container>
  );
};

export default Detail;
