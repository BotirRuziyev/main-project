<template>
  <Listbox
    as="div"
    v-model="selected"
    class="select fixed bottom-0 left-0 w-full"
  >
    <div class="relative">
      <ListboxButton
        class="select_btn relative w-full bg-neutral-800 cursor-default border-t border-t-neutral-700 py-2.5 px-5"
      >
        <span class="flex items-center gap-2.5">
          <img :src="selected.avatar" alt="" class="h-10 w-10 rounded-full" />
          <div class="w-full">
            <span
              class="block truncate text-left text-sm font-medium text-neutral-400"
              >{{ selected.name }}</span
            >
            <span class="block text-left text-xs font-medium text-neutral-600"
              >Trinity Rust</span
            >
          </div>
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-5"
        >
          <img src="@/assets/img/icons/arrown.svg" alt="" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="select_menu absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="person in people"
            :key="person.id"
            :value="person"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <img
                  :src="person.avatar"
                  alt=""
                  class="h-10 w-10 flex-shrink-0 rounded-full"
                />
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-3 block truncate',
                  ]"
                  >{{ person.name }}</span
                >
              </div>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import avatar from "@/assets/img/avatar.svg";
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const people = [
  {
    id: 1,
    name: "Trinity Rust",
    avatar: avatar,
  },
  {
    id: 2,
    name: "Wade Cooper",
    avatar: avatar,
  },
];

const selected = ref(people[0]);
</script>

<style lang="scss" scoped>
.select {
  .select_btn {
    span {
      font-family: var(--font-family);
      letter-spacing: 0.01em;
      line-height: 20px;
    }
  }
  .select_menu {
    width: calc(100% - 40px);
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
