<!-- Personnage.svelte -->

<script>
  import { onMount } from "svelte";
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import { page } from "$app/stores";

  let randomQuote = "";
  let gameInformation = [];
  let quote = [];
  let persos = [];
  let groupes = [];
  let perso = {};

  onMount(async () => {
    try {
      const response = await fetch("/api");
      const { gameInformations, quotes, personnages, groups } =
        await response.json();
      gameInformation = gameInformations[0];
      quote = quotes;
      persos = personnages;
      groupes = groups;
      // remember to convert the ID to a number
      perso = persos.find((perso) => perso.IDPERSONNAGE === parseInt($page.params.id));
    } catch (error) {
      console.error(error);
    }
  });
    
</script>


<main>
  <div class="personnage-container">
    <div class="image-container">
      <img
        src="/personnages/{perso.IMAGE}"
        alt={`${perso.PRENOM} ${perso.NOM}`}
      />
    </div>
    <div class="info-container">
      <h1>{perso.PRENOM} {perso.NOM}</h1>
      <p>{perso.DESCRIPTION}</p>
      <!-- Ajoutez d'autres informations sur le personnage ici -->
    </div>
  </div>
</main>

<style lang="scss">
  .personnage-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
  }

  .image-container {
    width: 50%;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: auto;
    transform: translateX(0);
    transition: transform 0.5s ease-out;
  }

  .info-container {
    width: 50%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  main {
    margin-top: 50px;
  }
</style>

