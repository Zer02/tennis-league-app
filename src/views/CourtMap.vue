<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import L from 'leaflet';

const courts = ref([]);

onMounted(async () => {
  const response = await fetch('/src/assets/courts.json');
  courts.value = await response.json();

  const map = L.map('map').setView([40.7128, -74.0060], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  courts.value.forEach(court => {
    L.marker([court.lat, court.lng])
      .addTo(map)
      .bindPopup(court.name);
  });
});
</script>

<style scoped>
#map {
  height: 100%;
  /* Ensure full height for the map */
  min-height: 400px;
  /* Set a minimum height */
}
</style>
