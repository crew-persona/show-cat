import Text from "components/Text";
import Heading from "components/Heading";
import { ListContainer, ListImage, ListItem } from "components/CatList";

const BestCats = () => {
  return (
    <>
      <div className="title" style={{ marginBottom: "32px" }}>
        <Heading as="h1" css={{ textAlign: "center", marginBottom: "12px" }}>
          🏆 명예의전당
        </Heading>
        <Text size="sm" css={{ color: "$black4", textAlign: "center" }}>
          일주일 동안 가장 인기 많았던 고양이 사진들이에요.
        </Text>
      </div>
      <ListContainer>
        <ListItem count={1}>
          <ListImage
            src={`https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834`}
            alt="cat"
          />
        </ListItem>
      </ListContainer>
    </>
  );
};

export default BestCats;
