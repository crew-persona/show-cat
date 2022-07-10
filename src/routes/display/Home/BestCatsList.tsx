import { useEffect, useState } from "react";
import { ListContainer, ListImage, ListItem } from "components/CatList";

interface BestCatsListProps {
  isPrevWeek: boolean;
}

interface CatItem {
  id: string;
  url: string;
}

const BestCatsList = ({ isPrevWeek }: BestCatsListProps) => {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=3&order=${
          isPrevWeek ? "desc" : "asc"
        }`
      );
      const json = await response.json();
      setCatList(json);
    };
    fetchData();
  }, [isPrevWeek]);

  return (
    <ListContainer>
      {catList.map((cat: CatItem) => {
        return (
          <ListItem key={cat.id} count={1}>
            <ListImage src={cat.url} />
          </ListItem>
        );
      })}
    </ListContainer>
  );
};

export default BestCatsList;
