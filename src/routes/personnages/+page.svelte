<!-- App.svelte -->

<script>
  import { onMount } from "svelte";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import Card, {
    Content,
    PrimaryAction,
    Media,
    MediaContent,
  } from "@smui/card";

  let randomQuote = "";
  let gameInformation = [];
  let quote = [];
  let persos = [];
  let groupes = [];

  onMount(async () => {
    try {
      const response = await fetch("/api");
      const { gameInformations, quotes, personnages, groups } =
        await response.json();
      gameInformation = gameInformations[0];
      quote = quotes;
      persos = personnages;
      groupes = groups;
    } catch (error) {
      console.error(error);
    }
  });

  const handleNavigation = (path) => {
    navigate(path);
  };
</script>

<body data-sveltekit-preload-data="hover">
  <div class="centered-top-app-bar">
    <TopAppBar>
      <Row>
        <Section align="end" toolbar>
          <IconButton
            class="material-icons custom-button"
            on:click={() => handleNavigation("/personnages")}
          >
            Personnages
          </IconButton>
          <IconButton
            class="material-icons custom-button"
            on:click={() => handleNavigation("/musiques")}
          >
            Musiques
          </IconButton>
          <IconButton
            class="material-icons custom-button"
            on:click={() => handleNavigation("/jeu")}
          >
            Gameplay
          </IconButton>
          <IconButton
            class="material-icons custom-button"
            on:click={() => handleNavigation("/equipe")}
          >
            Développeurs
          </IconButton>
        </Section>
      </Row>
    </TopAppBar>
  </div>

  {#each groupes as groupe}
    <div>
      <h2>{groupe.NOMGROUPE}</h2>
      <div class="personnages-container">
        {#each persos.filter((p) => p.GROUPE === groupe.ID) as perso}
            <div class="personnage-card">
              <a href="/personnages/{perso.IDPERSONNAGE}">
              <Card>
                <Media class="card-media-16x9" aspectRatio="16x9">
                  <MediaContent>
                    <img
                      src="/personnages/{perso.PORTRAIT}"
                      alt="{perso.PRENOM} {perso.NOM}"
                    />
                  </MediaContent>
                </Media>
                <Content>
                  <h2>{perso.PRENOM} {perso.NOM}</h2>
                </Content>
              </Card>
              </a>
            </div>
        {/each}
      </div>
    </div>
  {/each}
</body>

<style lang="scss">
  @import "./style.scss";
</style>
