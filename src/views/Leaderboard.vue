<template>
  <div>
    <h1>Leaderboard</h1>
    <ul>
      <li v-for="player in players" :key="player.name">
        {{ player.name }} - ELO: {{ player.elo }}
      </li>
    </ul>
    <!-- Add navigation link to the CourtMap page -->
    <router-link to="/courts">View Courts</router-link>
  </div>
</template>

<script setup>
import { useLeaderboardStore } from '@/stores/leaderboard';
const store = useLeaderboardStore();

store.fetchPlayers();
const players = store.players;
</script>

<style scoped>
h1 {
  font-size: 24px;
}
</style>
