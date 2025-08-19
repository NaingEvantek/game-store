import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatorm, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // >1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        {/* to show in which screen layout */}
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => {
              setSelectedGenre(genre);
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatorm}
          onSelectPlatforms={(platform) => {
            setSelectedPlatform(platform);
          }}
        />
        <GameGrid
          selectedPlatform={selectedPlatorm}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
