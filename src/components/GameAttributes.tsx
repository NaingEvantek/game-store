import Game from "../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitationItem from "./DefinitationItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitationItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id} margin={0}>
            {platform.name}
          </Text>
        ))}
      </DefinitationItem>

      <DefinitationItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitationItem>

      <DefinitationItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id} margin={0}>
            {genre.name}
          </Text>
        ))}
      </DefinitationItem>

      <DefinitationItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id} margin={0}>
            {publisher.name}
          </Text>
        ))}
      </DefinitationItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
