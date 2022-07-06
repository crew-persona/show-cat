import { useState } from "react";
import { Button, ButtonGroup, ButtonGroupItem } from "components/Button";
import { ListImage, ListItem } from "components/CatList";
import { ReactComponent as Jelly } from "@assets/icons/jelly.svg";
import Text from "components/Text";
import { styled, theme } from "@styles/stitches.config";

const DetailButtonContainer = styled("div", {
  position: "absolute",
  height: "25%",
  bottom: "4px",
  right: "4px",
  left: "4px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  background:
    "linear-gradient(360deg, rgba(1, 1, 1, 0.3) 0%, rgba(58, 58, 58, 0) 100%)",
  "@mobile": {
    bottom: "0",
    right: "0",
    left: "0",
  },
});

interface DetailListItemProps {
  initialLiked: boolean;
  initialLikedCount: number;
  src: string;
  alt: string;
}

const DetailListItem = ({
  initialLiked,
  initialLikedCount,
  src,
  alt,
}: DetailListItemProps) => {
  const [liked, setLiked] = useState(initialLiked);
  const [likedCount, setLikedCount] = useState(initialLikedCount);

  const onLikeButtonClick = () => {
    if (liked) {
      setLikedCount(likedCount - 1);
      setLiked(false);
    } else {
      setLikedCount(likedCount + 1);
      setLiked(true);
    }
  };

  return (
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
        position: "relative",
      }}
    >
      <ListImage src={src} alt={alt} />
      <DetailButtonContainer>
        <ButtonGroup
          css={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
            margin: 0,
            "@pc": {
              marginRight: "40px",
              marginBottom: "32px",
            },
            "@mobile": {
              marginRight: "24px",
              marginBottom: "16px",
            },
          }}
        >
          <ButtonGroupItem>
            <Text
              css={{
                color: "#fff",
                marginBottom: "4px",
              }}
            >
              {likedCount}
            </Text>
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Button
              css={{
                borderRadius: "50%",
                backgroundColor: liked ? "$red" : "$white",
              }}
              iconOnly={true}
              onClick={onLikeButtonClick}
            >
              <Jelly fill={liked ? "#fff" : "#6D6D6D"} />
            </Button>
          </ButtonGroupItem>
        </ButtonGroup>
      </DetailButtonContainer>
    </ListItem>
  );
};

export default DetailListItem;
