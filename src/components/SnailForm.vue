<script setup>
import BaseInput from "./BaseInput.vue";
</script>

<template>
  <div class="heading" v-if="!formSubmitted">
    Complete the form to find out if the Snail will succeed!
  </div>

  <div class="heading" v-if="formSubmitted">Did the Snail Succed?!</div>

  <form @submit.prevent="submitForm" v-if="!formSubmitted">
    <fieldset>
      <BaseInput
        v-model="event.h"
        label="Well Height"
        type="number"
        defaultMessage="Enter the well height in ft"
        min="1"
        max="100"
        required
      />

      <BaseInput
        v-model="event.u"
        label="Day Progress"
        type="number"
        defaultMessage="How much can the snail climb during the day? (ft)"
        min="1"
        max="100"
        required
      />

      <BaseInput
        v-model="event.d"
        label="Night Sliding"
        type="number"
        defaultMessage="How much does the snail slide during the night? (ft)"
        min="1"
        max="100"
        required
      />

      <BaseInput
        v-model="event.f"
        label="Fatigue Factor"
        type="number"
        defaultMessage="Enter the snail's fatigue factor percentage"
        min="1"
        max="100"
        required
      />
    </fieldset>

    <input class="submit" type="submit" value="Submit" />
  </form>

  <div class="formSubmittedSection" v-if="formSubmitted">
    <h3>The snail was tested using the following parameters:</h3>
    <p>
      Well Height: {{ wellHeight }} ft, Day Progress: {{ dayProgress }} ft,
      Night Sliding: {{ nightSlide }} ft, Fatigue Factor: {{ fatigueFactor }} %
    </p>

    <div class="snailEscapeSuccess" v-if="snailResult && !serverError">
      <p>Result: {{ snailResultString }}</p>
    </div>

    <div class="snailEscapeFail" v-if="!snailResult && !serverError">
      <p>Result: {{ snailResultString }}</p>
    </div>

    <div class="serverError" v-if="serverError">
      <p>
        Sorry, it looks like an error occurred when running this test for the
        Snail. Please try again later.
      </p>
    </div>

    <div class="reRunBox">
      <small>Click on Run to launch the app again!</small>
      <input @click="reRunForm" class="runButton" type="button" value="Run" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      event: {
        h: "",
        u: "",
        d: "",
        f: "",
      },
      wellHeight: 0,
      dayProgress: 0,
      nightSlide: 0,
      fatigueFactor: 0,
      snailResult: false,
      snailResultString: null,
      formSubmitted: false,
      serverError: false,
    };
  },
  methods: {
    submitForm(e) {
      this.formSubmitted = true;
      axios
        .put("https://snail-project.herokuapp.com/api/snailCheck", this.event)
        .then((response) => {
          console.log("Response", response);
          this.wellHeight = this.event.h;
          this.dayProgress = this.event.u;
          this.nightSlide = this.event.d;
          this.fatigueFactor = this.event.f;
          this.snailResult = response.data.snailSuccess;
          this.snailResultString = response.data.resultString;
        })
        .catch((error) => {
          console.log(error);
          this.serverError = true;
        });
    },
    reRunForm() {
      this.formSubmitted = false;
      this.serverError = false;
      this.event.h = "";
      this.event.u = "";
      this.event.d = "";
      this.event.f = "";
    },
  },
};
</script>

<style>
form {
  padding: 10px;
  border: 2px solid hsla(160, 100%, 37%, 1);
  border-radius: 5px;
  text-align: center;
  margin-bottom: 16px;
  max-width: 60%;
  margin-left: 20%;
}

input {
  padding: 4px 40px;
  margin: 15px;
  text-align: left;
}
fieldset {
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 1rem 1rem;
  border: none;
}

span {
  font-size: 18px;
  margin: 4px;
  font-weight: 500;
}

.submit {
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: hsla(160, 100%, 37%, 1);
  padding: 8px 12px;
  border: 2px solid hsla(160, 100%, 30%, 3);
  margin-top: 8px;
  cursor: pointer;
  border-radius: 8px;
}

.submit:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

.heading {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 16px;
}

.legend-header {
  font-weight: bold;
}

.formSubmittedSection {
  text-align: center;
}

.snailEscapeSuccess {
  color: #282828;
  font-weight: bold;
  background-color: hsl(118, 50%, 76%);
  border: 2px solid hsl(118, 89%, 24%);
  padding: 8px 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  width: 60%;
  margin-left: 20%;
}

.snailEscapeFail {
  color: #282828;
  font-weight: bold;
  background-color: hsl(0, 50%, 75%);
  border: 2px solid hsl(0, 51%, 48%);
  padding: 8px 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  width: 60%;
  margin-left: 20%;
}

.serverError {
  color: #282828;
  font-weight: bold;
  background-color: hsl(59, 58%, 71%);
  border: 2px solid hsl(41, 90%, 51%);
  padding: 8px 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  width: 60%;
  margin-left: 20%;
}

.reRunBox {
  display: grid;
  grid-template-rows: 0.5fr 1fr;
  padding: 16px 4px;
  border: none;
  text-align: center;
}

.runButton {
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: hsla(160, 100%, 37%, 1);
  padding: 8px 12px;
  border: 2px solid hsla(160, 100%, 30%, 3);
  margin-top: 8px;
  cursor: pointer;
  border-radius: 8px;
  width: 10%;
  margin-left: 45%;
  text-align: center;
}

@media (min-width: 800px) {
  .greetings h1 {
    text-align: center;
  }
  .greetings h3 {
    text-align: left;
  }
}
</style>
