import { Button } from "components/Button";
import { ReactComponent as Back } from "@assets/icons/back.svg";
import { ListContainer } from "components/CatList";
import Container from "components/Container";
import Header, { HeaderItemFull } from "components/Header";
import StyledLink from "components/StyledLink";
import DetailListItem from "components/DetailListItem";

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
              <Button as="div" active={true}>
                🐱 도전자
              </Button>
            </Button>
          </StyledLink>
        </HeaderItemFull>
      </Header>
      <ListContainer
        fullWidth={{ "@mobile": true }}
        css={{ marginTop: "32px" }}
      >
        <DetailListItem initialLiked={false} initialLikedCount={120} />
      </ListContainer>
    </Container>
  );
};

export default Detail;
