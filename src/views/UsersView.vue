<template>
  <div class="mt-8">
    <PrimaryButton class="mb-8 w-16" @click="addUser" :title="$t('add')" />
    <UsersTable :users="store.users" :edit-user="editUser" :delete-user="deleteUser" />
  </div>
</template>
<script lang="ts">
import UsersTable from '@/components/UsersTable.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { useUsersStore } from '@/stores/users'
export default {
  components: {
    UsersTable,
    PrimaryButton
  },
  methods: {
    addUser() {},
    editUser(id: string) {
      this.store.updateUser(id, {})
    },
    deleteUser(id: string) {
      this.store.deleteUser(id)
    }
  },
  mounted() {
    this.store.fetchUsers()
  },
  computed: {
    store: () => useUsersStore()
  }
}
</script>
