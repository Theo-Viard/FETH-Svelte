<script>
    import { onMount } from "svelte";
    import List, { Item, Text } from "@smui/list";
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
    import IconButton from "@smui/icon-button";

    let Teams = [];
    let sortedTeams = new Map();
    let clicked = null;

    onMount(async () => {
        try {
            const response = await fetch("/api");
            const { equipes } = await response.json();
            sortedTeams = equipes;
        } catch (error) {
            console.error(error);
        }
        console.log(Array.from(sortedTeams.values()));
    });
</script>

<body>
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
                    </a>
                </Section>
            </Row>
        </TopAppBar>
    </div>
    <div class="equipes-container">
        <div class="list-container">
            <List class="list">
                {#each Array.from(sortedTeams.values()) as company}
                    {#if company.TEAM == null}
                        <Item on:SMUI:action={() => (clicked = company)}>
                            <Text>{company.NOMEQUIPE}</Text>
                        </Item>
                    {/if}
                    <Item wrapper>
                        <List class="sub-list">
                            {#each Array.from(sortedTeams.values()) as membre}
                                {#if company.ID == membre.TEAM}
                                    <Item
                                        on:SMUI:action={() =>
                                            (clicked = membre)}
                                    >
                                        <Text>{membre.NOMEQUIPE}</Text>
                                    </Item>
                                {/if}
                            {/each}
                        </List>
                    </Item>
                {/each}
            </List>
        </div>
        <div class="details-container">
            {#if clicked !== null}
                <div>
                    <h2>{clicked.NOMEQUIPE}</h2>
                    <p>{clicked.DESCRIPTION}</p>
                    {#if clicked.TEAM == ""}
                        <h2>Leurs projets</h2>
                        <a href={clicked.LIENPROJET1}>
                            <h3>{clicked.PROJET1}</h3>
                        </a>
                        <a href={clicked.LIENPROJET2}>
                            <h3>{clicked.PROJET2}</h3>
                        </a>
                    {/if}
                </div>
            {/if}
        </div>
    </div>
</body>

<style lang="scss">
    @import "./style.scss";
  </style>