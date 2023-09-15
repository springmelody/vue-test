<template>
  <div class="container">
    <form-popup v-if="isOpenPopup"></form-popup>
    <main-button @clickBtn="openPopup" label="Добавить" />
    <user-list />
  </div>
</template>

<script>
import MainButton from "@/components/MainButton.vue";
import UserList from "@/components/UserList.vue";
import FormPopup from "@/components/FormPopup.vue";

import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    MainButton,
    UserList,
    FormPopup,
  },
  computed: {
    ...mapState(["isOpenPopup"]),
  },
  methods: {
    ...mapMutations(["openPopup"]),
  },
};
</script>
