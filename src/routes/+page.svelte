<!-- App.svelte -->

<script>
  import { onMount } from "svelte";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";

  let randomQuote = "";
  let gameInformation = [];
  let quote = [];

  onMount(async () => {
    try {
      const response = await fetch("/api");
      const { gameInformations, quotes } = await response.json();
      gameInformation = gameInformations[0];
      quote = quotes;
    } catch (error) {
      console.error(error);
    }
    randomQuote = quote[Math.floor(Math.random() * quote.length)];
    setInterval(() => {
      randomQuote = quote[Math.floor(Math.random() * quote.length)];
    }, 5000);
    const video = document.querySelector(".video-card video");
    video.play();
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
        </Section>
      </Row>
    </TopAppBar>
  </div>

  <div class="container">
    <img src={"feth.png"} alt="Fire Emblem Three Houses" width="50%" />
    <p class="quote">{randomQuote.quote} - {randomQuote.par}</p>
    <div class="inline">
      <p>
        Date de sortie: <span style="color: red;"
          >{gameInformation.RELEASE_DATE}</span
        >
      </p>
      <p>
        Genre: <span style="color: red;">{gameInformation.TYPE_OF_GAME}</span>
      </p>
      <p>Développeur: <span style="color: red;">{gameInformation.DEV}</span></p>
    </div>
  </div>

  <div class="informations card-container">
    <div class="card text_left_img_right">
      <img src={gameInformation.IMGINFO1} alt="Fire Emblem Three Houses" />
      <div class="card-content">
        <p>{gameInformation.GAMEINFO1}</p>
      </div>
    </div>
    <div class="card text_right_img_left">
      <img src={gameInformation.IMGINFO2} alt="Fire Emblem Three Houses" />
      <div class="card-content">
        <p>{gameInformation.GAMEINFO2}</p>
      </div>
    </div>
  </div>

  <div class="video-container">
    <video controls width="100%" poster="poster-image.jpg">
      <source src="feth_trailer.mp4" type="video/mp4" />
      Votre navigateur ne prend pas en charge la balise vidéo.
    </video>
  </div>
</body>

<style lang="scss">
  @import "./style.scss";
</style>
