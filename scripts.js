Vue.createApp({
  data() {
    return {
      searchQuery: "",
      pokemons: [
        {
          name: "Tim",
          type: "Schüler",
          hp: 35,
          weight: 15,
          height: 5,
          visibleDetails: false,
        },
        {
          name: "Joe",
          type: "Löhrer",
          hp: 50,
          weight: 20,
          height: 7,
          visibleDetails: false,
        },
      ],
    };
  },
  computed: {
    pokemonCount() {
      return this.pokemonFilteredList.length;
    },
    pokemonFilteredList() {
      return this.pokemons.filter((pokemon) =>
        pokemon.name.startsWith(this.searchQuery)
      );
    },
  },
  methods: {
    filterItems() {
      this.isFilterActive = true;
    },
    showDetails(index) {
      this.pokemons[index].visibleDetails =
        !this.pokemons[index].visibleDetails;
    },
    detailsButtonText(index) {
      return this.pokemons[index].visibleDetails
        ? "Hide Details"
        : "Show Details";
    },
  },
}).mount("#app");
