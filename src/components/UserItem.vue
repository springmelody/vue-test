<template>
  <tr>
    <td>
      {{ user.name }}
    </td>
    <td>{{ user.phoneNumber }}</td>
  </tr>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
