<template>
  <tr>
    <td :style="{ 'padding-left': getPadding }">
      <span>-</span>
      {{ user.name }}
    </td>
    <td>{{ user.phoneNumber }}</td>
  </tr>

  <template v-if="user.childrens.length">
    <SubItem
      v-for="children in user.childrens"
      :user="children"
      :level="children.level"
      :key="children.id"
    ></SubItem>
  </template>
</template>

<script>
export default {
  name: "SubItem",
  props: {
    user: {
      type: Object,
      required: true,
    },

    level: {
      type: Number,
      required: true,
    },
  },
  computed: {
    getPadding() {
      const level = this.level * 8 + 20;
      return `${level}px`;
    },
  },
};
</script>
