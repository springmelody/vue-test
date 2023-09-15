<template>
  <div v-if="users.length">
    <table class="table">
      <tbody>
        <tr>
          <th @click="nameSorting">Имя</th>
          <th @click="phoneSorting">Телефон</th>
        </tr>
        <template v-for="user in users" :key="user.id">
          <user-item :user="user"></user-item>
          <template v-if="user.childrens.length">
            <sub-item
              v-for="children in user.childrens"
              :user="children"
              :key="children.id"
              :level="children.level"
            ></sub-item>
          </template>
        </template>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p>Добавте пользователей</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import UserItem from "@/components/UserItem.vue";
import SubItem from "@/components/SubItem.vue";
export default {
  components: {
    SubItem,
    UserItem,
  },
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    ...mapMutations(["nameSorting", "phoneSorting"]),
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th {
    padding: 20px;
    text-align: left;
    border: 2px solid var(--table-border);
  }
}
</style>
