import { createStore } from "vuex";
import { deepAddUser, deepSortUserName, deepSortUserPhone } from "./helpers.js";

const users = JSON.parse(localStorage.getItem("user-list")) || [];
const store = createStore({
  state() {
    return {
      users,
      isOpenPopup: false,
      selectList: [],
    };
  },
  mutations: {
    addUser(state, { name, phoneNumber, bossId }) {
      const currentUser = {
        id: crypto.randomUUID(),
        name,
        phoneNumber,
        childrens: [],
        bossId,
      };
      state.selectList.push({ id: currentUser.id, name });
      deepAddUser(currentUser, state.users);
      localStorage.setItem("user-list", JSON.stringify(state.users));
    },
    nameSorting({ users }) {
      deepSortUserName(users);
    },
    phoneSorting({ users }) {
      deepSortUserPhone(users);
    },
    openPopup(state) {
      state.isOpenPopup = true;
    },
    closePopup(state) {
      state.isOpenPopup = false;
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getSelectUsers(state) {
      return state.selectList;
    },
  },
});

export default store;
