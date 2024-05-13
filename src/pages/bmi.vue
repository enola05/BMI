<template>
  <q-page class="q-pa-md" style="display: flex;justify-content: center;">
    <q-card class="q-pa-md bmi-calc">
      <q-card-section class="text-h6">BMI Calculator</q-card-section>
      <q-card-section>
        <q-input outlined v-model="height" label="Height (cm)" type="number"></q-input>
        <q-input outlined v-model="weight" label="Weight (kg)" type="number"></q-input>
        <q-btn color="primary" label="Calculate BMI" @click="calculateBMI" class="q-mt-md"></q-btn>
      </q-card-section>
      <q-card-section v-if="bmi !== null">
        <p class="text-h6">Your BMI is: {{ bmi.toFixed(2) }}</p>
        <p class="text-body1">BMI Category: {{ getBMICategory(bmi) }}</p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      height: null,
      weight: null,
      bmi: null
    };
  },
  methods: {
    calculateBMI() {
      if (this.height && this.weight) {
        const heightInMeters = this.height / 100;
        this.bmi = this.weight / (heightInMeters * heightInMeters);
      } else {
        this.bmi = null;
      }
    },
    getBMICategory(bmi) {
      if (bmi < 18.5) {
        return "Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
      } else {
        return "Obese";
      }
    }
  }
};
</script>

<style scoped>
/* Add your custom styles here */
.bmi-calc{
  width:60vh;
  height: 60vh;
}
</style>
