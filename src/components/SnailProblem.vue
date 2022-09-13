<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <img
      alt="Snail logo"
      class="logo"
      src="@/assets/snail.png"
      width="125"
      height="125"
    />
    <h1 class="green">{{ msg }}</h1>
    <h3>
      A snail is at the bottom of a well of H height and wants to climb to the
      top. The snail can climb U feet while the sun is up, but slides down D
      feet at night while sleeping. The snail has a fatigue factor of F %, which
      means that on each successive day the snail climbs F % * H = W feet less
      than it did the previous day. The distance lost to fatigue is always F %
      of the *first* day's climbing distance. All four numbers must be between 1
      and 100, inclusive.
    </h3>
    <h3 class="second-p">
      Depending on the parameters of the problem, the snail will eventually
      either leave the well — Success — or slide back to the bottom of the well
      — Failure.
    </h3>
    <h3 class="third-p">
      The purpose of this app is to find out which happens first and on what
      day.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.second-p {
  margin-top: 16px;
}

.third-p {
  margin-top: 16px;
  color: hsla(160, 100%, 37%, 1);
  font-weight: bold;
}

.greetings {
  text-align: center;
}
.greetings h3 {
  text-align: left;
}
</style>
