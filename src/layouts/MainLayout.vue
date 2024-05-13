<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          shrink
          class="row items-center no-wrap"
        >
          <span class="q-ml-sm">DEVKIT </span>
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item
            class="GNL__drawer-item"
            v-ripple
            v-for="link in links1"
            :key="link.text"
            clickable
            @click.native="$router.push(link.link)"
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <div class="q-mt-md">
            <div class="flex flex-center q-gutter-xs">
              <a
                class="GNL__drawer-footer-link"
                href="javascript:void(0)"
                aria-label="Privacy"
                >Privacy</a
              >
              <span> · </span>
              <a
                class="GNL__drawer-footer-link"
                href="javascript:void(0)"
                aria-label="Terms"
                >Terms</a
              >
              <span> · </span>
              <a
                class="GNL__drawer-footer-link"
                href="javascript:void(0)"
                aria-label="About"
                >About ELC</a
              >
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { fasEarthAmericas, fasFlask } from "@quasar/extras/fontawesome-v6";

export default {
  name: "GoogleNewsLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const search = ref("");
    const showAdvanced = ref(false);
    const showDateOptions = ref(false);
    const exactPhrase = ref("");
    const hasWords = ref("");
    const excludeWords = ref("");
    const byWebsite = ref("");
    const byDate = ref("Any time");

    function onClear() {
      exactPhrase.value = "";
      hasWords.value = "";
      excludeWords.value = "";
      byWebsite.value = "";
      byDate.value = "Any time";
    }

    function changeDate(option) {
      byDate.value = option;
      showDateOptions.value = false;
    }

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      leftDrawerOpen,
      search,
      showAdvanced,
      showDateOptions,
      exactPhrase,
      hasWords,
      excludeWords,
      byWebsite,
      byDate,

      links1: [
        { icon: "web", text: "BMI", link: "/bmi" },
        { icon: "schedule", text: "TIME", link: "/time" },
      ],
      links2: [{ icon: "flag", text: "Canada", link: "/bmi" }],
      links3: [{ icon: "", text: "Language & region", link: "/bmi" }],

      onClear,
      changeDate,
      toggleLeftDrawer,
    };
  },
};
</script>

<style lang="sass">
.GNL

  &__toolbar
    height: 64px

  &__toolbar-input
    width: 55%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      .q-icon
        color: #5f6368

    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
