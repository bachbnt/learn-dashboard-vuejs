<template>
  <table class="min-w-full bg-white border border-gray-300">
    <!-- Table headers -->
    <thead>
      <tr>
        <th class="py-2 px-4 border w-16">{{ $t('id') }}</th>
        <th class="py-2 px-4 border">{{ $t('fullName') }}</th>
        <th class="py-2 px-4 border">{{ $t('email') }}</th>
        <th class="py-2 px-4 border">{{ $t('role') }}</th>
        <th class="py-2 px-4 border">{{ $t('actions') }}</th>
      </tr>
    </thead>
    <!-- Table body -->
    <tbody>
      <tr v-for="user in users" :key="user._id">
        <td class="py-2 px-4 border w-16">{{ user._id }}</td>
        <td class="py-2 px-4 border">{{ user.fullName }}</td>
        <td class="py-2 px-4 border">{{ user.email }}</td>
        <td class="py-2 px-4 border">{{ user.role }}</td>
        <td class="py-2 px-4 border text-center">
          <button @click="editUser(user._id)" class="text-blue-500">{{ $t('edit') }}</button>
          <button @click="deleteUser(user._id)" class="text-red-500 ml-2">
            {{ $t('delete') }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import type { User } from '@/types/User'
export default {
  props: {
    users: {
      type: Array<User>,
      required: true
    },
    editUser: {
      type: Function,
      required: true
    },
    deleteUser: {
      type: Function,
      required: true
    }
  }
}
</script>
