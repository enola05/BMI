<template>
  <q-page class="q-pa-md" style="display: flex; justify-content: center">
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 400px">
        <q-tabs v-model="data.tab" narrow-indicator dense align="justify">
          <q-tab class="text-purple" name="timer" icon="timer" label="Timer" />
          <q-tab
            class="text-orange"
            name="alarms"
            icon="alarm_on"
            label="Alarms"
          />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="data.tab" animated>
          <q-tab-panel name="timer">
            <q-card class="q-pa-md">
              <q-card-section>
                <div class="text-h6 text-center">{{ formattedTime }}</div>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn color="primary" @click="startStop">{{
                  data.running ? "Stop" : "Start"
                }}</q-btn>
                <q-btn color="primary" @click="reset" :disable="running"
                  >Reset</q-btn
                >
              </q-card-actions>
            </q-card>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <q-card>
              <q-card-section>
                <q-time v-model="data.alarmTime" format="hh:mm A" />
              </q-card-section>
              <q-card-section>
                <q-btn color="primary" @click="setAlarm">Set Alarm</q-btn>
                <q-btn color="primary" @click="stopAlarm">Stop Alarm</q-btn>
              </q-card-section>
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { reactive, computed, watch } from "vue";
const data = reactive({
  tab: "timer",
  running: false,
  startTime: null,
  elapsedTime: 0,
  timer: 0,
  alarmTime: new Date(),
  alarmInterval: null,
  isAlarmRinging: false,
});

const formattedTime = computed(() => {
  const minutes = Math.floor(data.elapsedTime / 60000);
  const seconds = ((data.elapsedTime % 60000) / 1000).toFixed(2);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
});

const startStop = () => {
  if (data.running) {
    clearInterval(data.timer);
  } else {
    data.startTime = Date.now() - data.elapsedTime;
    data.timer = setInterval(() => {
      data.elapsedTime = Date.now() - data.startTime;
    }, 10);
  }
  data.running = !data.running;
};

const reset = () => {
  data.running = false;
  data.elapsedTime = 0;
};
const setAlarm = () => {
  // Parse the time string into a Date object
  const currentTime = new Date();
  const alarmTimeValue = parseTime(data.alarmTime);

  // Calculate the time remaining until the alarm
  alarmTimeValue.setFullYear(currentTime.getFullYear());
  alarmTimeValue.setMonth(currentTime.getMonth());
  alarmTimeValue.setDate(currentTime.getDate());
  const timeDifference = alarmTimeValue - currentTime;

  if (timeDifference <= 0) {
    console.log("Invalid alarm time");
    return;
  }

  // Set up an interval to check if it's time for the alarm
  data.alarmInterval = setInterval(() => {
    console.log("alarmTimeValue", alarmTimeValue);
    const currentTime = new Date();
    const timeDifference = alarmTimeValue - currentTime;

    if (timeDifference <= 0) {
      console.log("Alarm!");
      data.isAlarmRinging = true;
      stopAlarm(); // Stop the alarm when it's time
    }
  }, 1000);
};

// Function to parse a time string into a Date object
const parseTime = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
};

// Function to stop the alarm
const stopAlarm = () => {
  clearInterval(data.alarmInterval);
  data.isAlarmRinging = false;
};
</script>
