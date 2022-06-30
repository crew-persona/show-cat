import { Button } from "components/Button";
import { ReactComponent as Back } from "@assets/icons/back.svg";
import { ListContainer, ListImage, ListItem } from "components/CatList";
import Container from "components/Container";
import Header, { HeaderItemFull } from "components/Header";
import StyledLink from "components/StyledLink";

const Detail = () => {
  return (
    <Container>
      <Header>
        <HeaderItemFull>
          <StyledLink to="/" underline={false}>
            <Button
              css={{
                dipslay: "flex",
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Back width="16" height="16" style={{ marginRight: "6px" }} />
              🐱 도전자
            </Button>
          </StyledLink>
        </HeaderItemFull>
      </Header>
      <ListContainer
        fullWidth={{ "@mobile": true }}
        css={{ marginTop: "32px" }}
      >
        <ListItem
          count={1}
          css={{
            "@pc": {
              marginBottom: "72px",
            },
            "@mobile": {
              marginBottom: "24px",
              padding: 0,
              width: "100%",
            },
          }}
        >
          <ListImage
            src={`https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834`}
            alt="cat"
          />
        </ListItem>
      </ListContainer>
    </Container>
  );
};

export default Detail;
