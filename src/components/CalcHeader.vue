<template>
  <header class="bg-white w-full">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a :href="RoutePath.HOME" class="-m-1.5 p-1.5">
          <img class="h-8 w-auto" src="/logo_vue.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative m-auto">
          <PopoverButton
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          >
            {{ $t('feature') }}
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="p-4">
                <div
                  v-for="item in features"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="flex-auto">
                    <RouterLink :to="item.href" class="block font-semibold text-gray-900">
                      {{ $t(item.name) }}
                      <span class="absolute inset-0" />
                    </RouterLink>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
        <RouterLink :to="RoutePath.ABOUT" class="text-sm font-semibold leading-6 text-gray-900">
          {{ $t('about') }}
        </RouterLink>
        <RouterLink :to="RoutePath.STOCK" class="text-sm font-semibold leading-6 text-gray-900">
          {{ $t('stock') }}
        </RouterLink>
        <RouterLink :to="RoutePath.CRYPTO" class="text-sm font-semibold leading-6 text-gray-900">
          {{ $t('crypto') }}
        </RouterLink>
        <Popover class="relative m-auto">
          <PopoverButton
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          >
            {{ $t('account') }}
            <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="p-4">
                <div
                  v-for="item in accounts"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="flex-auto">
                    <RouterLink :to="item.href" class="block font-semibold text-gray-900">
                      {{ $t(item.name) }}
                      <span class="absolute inset-0" />
                    </RouterLink>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a
                  v-for="item in callsToAction"
                  :key="item.name"
                  @click="onClick(item.name)"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  <component
                    :is="item.icon"
                    class="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                  {{ $t(item.name) }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
    </nav>
    <CustomDialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a :href="RoutePath.HOME" class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="/logo_vue.png" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {{ $t('feature') }}
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...features]"
                    :key="item.name"
                    as="a"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ $t(item.name) }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
              <RouterLink
                :to="RoutePath.ABOUT"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {{ $t('about') }}
              </RouterLink>
              <RouterLink
                :to="RoutePath.STOCK"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {{ $t('stock') }}
              </RouterLink>
              <RouterLink
                :to="RoutePath.CRYPTO"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {{ $t('crypto') }}
              </RouterLink>
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {{ $t('account') }}
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...accounts, ...callsToAction]"
                    :key="item.name"
                    as="a"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ $t(item.name) }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
      </DialogPanel>
    </CustomDialog>
  </header>
</template>

<script lang="ts">
import { ref } from 'vue'
import {
  Dialog as CustomDialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/vue'
import { Bars3Icon, CalculatorIcon, ChartPieIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import {
  ChevronDownIcon,
  UserCircleIcon,
  LockClosedIcon,
  BellIcon,
  ArrowRightStartOnRectangleIcon,
  TableCellsIcon
} from '@heroicons/vue/20/solid'
import { useAuthStore } from '@/stores/auth'
import { RouteName, RoutePath } from '@/router/route'

const features = [
  {
    name: 'analytic',
    description: 'Analyze your stocks',
    href: '#',
    icon: ChartPieIcon
  },
  {
    name: RouteName.CALCULATOR,
    description: 'Calculate your dividend',
    href: RoutePath.CALCULATOR,
    icon: CalculatorIcon
  },
  {
    name: RouteName.MANAGEMENT,
    description: 'Manage all users',
    href: RoutePath.MANAGEMENT,
    icon: TableCellsIcon
  }
]

const accounts = [
  {
    name: 'profile',
    description: 'View your information',
    href: '#',
    icon: UserCircleIcon
  },
  {
    name: RouteName.CHANGE_PASSWORD,
    description: 'Update your password',
    href: RoutePath.CHANGE_PASSWORD,
    icon: LockClosedIcon
  }
]
const callsToAction = [
  { name: 'notification', icon: BellIcon },
  { name: 'signOut', icon: ArrowRightStartOnRectangleIcon }
]

export default {
  components: {
    CustomDialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
    LockClosedIcon,
    ArrowRightStartOnRectangleIcon,
    RoutePath
  },
  setup() {
    const mobileMenuOpen = ref(false)
    return {
      mobileMenuOpen,
      features,
      accounts,
      callsToAction
    }
  },
  data() {
    return {
      RoutePath,
      RouteName
    }
  },
  methods: {
    onClick(name: string) {
      if (name === 'signOut') {
        this.store.signOut(() => {
          this.$router.push({ path: RoutePath.SIGN_IN, replace: true })
          this.mobileMenuOpen = false
        })
      } else if (name === 'notification') {
        alert('notification')
      }
    }
  },
  computed: {
    store: () => useAuthStore()
  }
}
</script>
