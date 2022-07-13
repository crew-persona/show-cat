import { useEffect, useState } from "react";
import {
  ListContainer,
  ListImage,
  ListItem,
  ListOverlay,
} from "components/CatList";
import Text from "components/Text";

interface BestCatsListProps {
  isPrevWeek: boolean;
}

interface CatItem {
  id: string;
  url: string;
}

const BestCatsList = ({ isPrevWeek }: BestCatsListProps) => {
  const [catList, setCatList] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <ListContainer fullWidth={true}>
      {catList.map((cat: CatItem) => {
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
              foo
            </ListOverlay>
            <ListImage src={cat.url} />
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default BestCatsList;
