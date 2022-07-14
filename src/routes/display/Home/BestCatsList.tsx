import { useEffect, useState } from "react";
import {
  ListContainer,
  ListImage,
  ListItem,
  ListOverlay,
} from "components/CatList";
import Text from "components/Text";
import Medal from "components/Icons/Medal";
import { css, styled, theme } from "@styles/stitches.config";

interface BestCatsListProps {
  isPrevWeek: boolean;
}

interface CatItem {
  id: string;
  url: string;
}

const MedalGroup = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "48px",
  "@mobile": {
    marginLeft: "32px",
  },
});

const MedalCount = styled("p", {
  color: "$white",
  fontWeight: 600,
  position: "relative",
  top: "8px",
});

const BestCatsList = ({ isPrevWeek }: BestCatsListProps) => {
  const [catList, setCatList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    colors: { gold, silver, bronze, goldJelly, silverJelly, bronzeJelly },
  } = theme;

  useEffect(() => {
    const fetchData = async () => {
      // clear all states
      setCatList([]);
      setLoading(true);
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=3&order=${
          isPrevWeek ? "desc" : "asc"
        }`
      );
      // get cat list and set loading status
      const json = await response.json();
      setCatList(json);
      setLoading(false);
    };
    fetchData();
  }, [isPrevWeek]);

  if (loading) {
    return <Text as="h2">loading</Text>;
  }

  return (
    <ListContainer fullWidth={{ "@mobile": true }}>
      {catList.map((cat: CatItem, index: number) => {
        return (
          <ListItem
            key={cat.id}
            count={1}
            css={{
              position: "relative",
              "@mobile": {
                paddingLeft: 0,
                paddingRight: 0,
                width: "100%",
              },
            }}
          >
            <ListOverlay position="top" align="start">
              {index === 0 ? (
                <MedalGroup>
                  <Medal medalColor={gold.value} jellyColor={goldJelly.value} />
                  <MedalCount>1234</MedalCount>
                </MedalGroup>
              ) : (
                ""
              )}
              {index === 1 ? (
                <MedalGroup>
                  <Medal
                    medalColor={silver.value}
                    jellyColor={silverJelly.value}
                  />
                  <MedalCount>1234</MedalCount>
                </MedalGroup>
              ) : (
                ""
              )}
              {index === 2 ? (
                <MedalGroup>
                  <Medal
                    medalColor={bronze.value}
                    jellyColor={bronzeJelly.value}
                  />
                  <MedalCount>1234</MedalCount>
                </MedalGroup>
              ) : (
                ""
              )}
            </ListOverlay>
            <ListImage src={cat.url} />
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default BestCatsList;
