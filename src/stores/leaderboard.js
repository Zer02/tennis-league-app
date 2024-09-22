import { defineStore } from "pinia";
import { ref } from "vue";

export const useLeaderboardStore = defineStore("leaderboard", {
  state: () => ({
    players: ref([]),
  }),
  actions: {
    async fetchPlayers() {
      const response = await fetch("/src/assets/players.json");
      this.players = await response.json();
    },
    updateElo(playerName, eloChange) {
      const player = this.players.find((p) => p.name === playerName);
      if (player) {
        player.elo += eloChange;
      }
    },
  },
  async created() {
    await this.fetchPlayers();
  },
});
