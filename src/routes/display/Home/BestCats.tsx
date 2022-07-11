import { useState } from "react";
import { styled } from "@styles/stitches.config";
import Text from "components/Text";
import Heading from "components/Heading";
import { Button, ButtonGroup, ButtonGroupItem } from "components/Button";
import BestCatsList from "./BestCatsList";

const BestCatsButton = styled(Button, {
  padding: "7px 20px",
  "@mobile": {
    padding: "7px 32px 7px 8px",
  },
  variants: {
    active: {
      true: {
        position: "relative",
        transformStyle: "preserve-3d",
        backgroundColor: "transparent",
        "&::before": {
          content: "",
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "12px",
          backgroundColor: "$teal",
          transform: "translateZ(-1px)",
        },
      },
    },
  },
});

const BestCats = () => {
  const [isPrevWeek, setIsPrevWeek] = useState(false);

  const handleWeekButton = () => {
    setIsPrevWeek(!isPrevWeek);
  };

  return (
    <>
      <div className="title" style={{ marginBottom: "32px" }}>
        <Heading
          as="h1"
          css={{
            marginBottom: "12px",
            "@pc": {
              textAlign: "center",
            },
          }}
        >
          🏆 명예의전당
        </Heading>
        <Text
          size="sm"
          css={{
            color: "$black4",
            "@pc": {
              textAlign: "center",
            },
          }}
        >
          일주일 동안 가장 인기 많았던 고양이 사진들이에요.
        </Text>
      </div>
      <ButtonGroup
        css={{
          "@pc": {
            justifyContent: "center",
          },
        }}
      >
        <ButtonGroupItem css={{ marginRight: "8px" }}>
          <BestCatsButton active={!isPrevWeek} onClick={handleWeekButton}>
            이번 주
          </BestCatsButton>
        </ButtonGroupItem>
        <ButtonGroupItem css={{ marginLeft: "8px" }}>
          <BestCatsButton active={isPrevWeek} onClick={handleWeekButton}>
            지난 주
          </BestCatsButton>
        </ButtonGroupItem>
      </ButtonGroup>
      <BestCatsList isPrevWeek={isPrevWeek} />
    </>
  );
};

export default BestCats;
