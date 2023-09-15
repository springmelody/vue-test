<template>
  <div class="wrapper">
    <div class="modal">
      <main-button @clickBtn="closePopup" class="cross" label="X"></main-button>
      <h2>Добавление пользователя</h2>
      <form class="form" @submit.prevent="sendForm">
        <div class="form__group">
          <label class="form__label" for="name">Имя</label>
          <input
            class="form__input"
            id="name"
            v-model="formData.name"
            type="text"
          />
        </div>
        <div class="form__group">
          <label class="form__label" for="phoneNumber">Телефон</label>
          <input
            class="form__input"
            id="phoneNumber"
            v-model="formData.phoneNumber"
            type="text"
          />
        </div>

        <div class="form__group">
          <label class="form__label" for="boss">Начальник: </label>
          <select class="form__select" id="boss" v-model="formData.bossId">
            <option
              v-for="(user, idx) in getSelectUsers"
              :key="idx"
              :value="user.id"
            >
              {{ user.name }}
            </option>
          </select>
        </div>
        <main-button type="submit" label="Сохранить"></main-button>
      </form>
    </div>
  </div>
</template>

<script>
import MainButton from "@/components/MainButton.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "FormPopup",
  components: {
    MainButton,
  },
  data() {
    return {
      formData: {
        name: "",
        phoneNumber: "",
        bossId: null,
      },
    };
  },
  computed: {
    ...mapState(["users"]),

    ...mapGetters(["getSelectUsers"]),
  },
  methods: {
    ...mapMutations(["addUser", "closePopup"]),
    sendForm() {
      if (this.formData.name !== "" && this.formData.phoneNumber !== "") {
        this.addUser(this.formData);
        this.formData.name = "";
        this.formData.phoneNumber = "";
        this.formData.bossId = null;
        this.closePopup();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: var(--modal-wrapper-bg);
}

.modal {
  width: 650px;
  min-height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--modal-bg);
  padding: 20px 60px 20px 35px;
  border-radius: 20px;
}

.cross {
  position: absolute;
  top: 15px;
  right: 15px;
}
.form {
  &__label {
    display: block;
  }

  &__input,
  &__select {
    padding: 5px 10px 5px 5px;
    height: 40px;
    width: 350px;
    font-size: 16px;
  }

  &__group {
    margin-bottom: 20px;
  }
}
</style>
