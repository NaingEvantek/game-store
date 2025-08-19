import React from "react";
import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      {/* Add overflow because image size is bigger than box and border radius is not working */}
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>{" "}
        {/* Predefined size we can check and use in Chakra UI documentation */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
