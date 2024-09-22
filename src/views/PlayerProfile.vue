<template>
  <div>
    <h1>Player Profile: {{ player.name }}</h1>
    <p>ELO Rating: {{ player.elo }}</p>
    <p>Recent Matches: {{ player.recentMatches.join(', ') }}</p>
    <!-- Add more player details here -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useLeaderboardStore } from '@/stores/leaderboard';

const route = useRoute();
const store = useLeaderboardStore();
const player = ref({ name: '', elo: 0, recentMatches: [] });

// Fetch player details when component is mounted
onMounted(() => {
  const playerData = store.players.find(p => p.name === route.params.name);
  if (playerData) {
    player.value = playerData;
  }
});
</script>

<style scoped>
h1 {
  font-size: 24px;
}
</style>
