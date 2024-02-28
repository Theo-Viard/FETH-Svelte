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
  import LayoutGrid, { Cell, InnerGrid } from "@smui/layout-grid";

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
          <a href="/personnages">
            <IconButton class="material-icons custom-button">
              personnages
            </IconButton>
          </a>
          <a href="/equipes">
            <IconButton class="material-icons custom-button">
              Développeurs
            </IconButton>
          </a></Section
        >
      </Row>
    </TopAppBar>
  </div>
  <LayoutGrid>
    {#each groupes as groupe}
      <div class="group-container">
        <h2 id="nomgroupe">{groupe.NOMGROUPE}</h2>
        <div class="personnages-container">
          <InnerGrid class="rangement">
            {#each persos.filter((p) => p.GROUPE === groupe.ID) as perso}
              <Cell>
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
              </Cell>
            {/each}
          </InnerGrid>
        </div>
      </div>
    {/each}
  </LayoutGrid>
</body>

<style lang="scss">
  @import "./style.scss";
</style>
