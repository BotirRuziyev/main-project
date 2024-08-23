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
          class="select_menu absolute z-10 w-full rounded-lg bg-neutral-900 p-1"
        >
          <div
            class="users_list overflow-auto mb-0.5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500"
          >
            <ListboxOption
              as="template"
              v-for="person in people"
              :key="person.id"
              :value="person"
              v-slot="{ selected }"
            >
              <li
                :class="[
                  selected ? 'bg-neutral-800 text-white' : 'text-gray-900 ',
                  'list_item flex items-center gap-x-2.5 relative cursor-default rounded-md select-none duration-200 hover:bg-neutral-800 mb-0.5',
                ]"
              >
                <div class="list_type">
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z"
                      stroke="#737373"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z"
                      stroke="#737373"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z"
                      stroke="#737373"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 10C8.55228 10 9 9.55228 9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9C7 9.55228 7.44772 10 8 10Z"
                      stroke="#737373"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 3C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2C7 2.55228 7.44772 3 8 3Z"
                      stroke="#737373"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17Z"
                      stroke="#737373"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="flex items-center gap-x-2.5">
                  <img
                    :src="person.avatar"
                    alt=""
                    class="h-9 w-9 rounded-full"
                  />
                  <div class="user_info">
                    <span
                      class="user_name block text-sm text-neutral-300 leading-3 font-medium"
                      >{{ person.name }}</span
                    >
                    <span
                      class="user_vk text-xs text-neutral-600 leading-2 font-medium"
                      >vk.com/rust</span
                    >
                  </div>
                </div>
                <span
                  v-if="selected"
                  :class="[
                    selected ? 'text-white' : 'text-indigo-600',
                    'absolute inset-y-0 right-0 flex items-center pr-4',
                  ]"
                >
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </div>
          <div class="add_server py-1 border-y border-neutral-800">
            <button
              class="add_server_btn w-full flex items-center rounded-md gap-x-3 py-2.5 px-4 duration-200 hover:bg-neutral-800"
            >
              <img src="@/assets/img/icons/add_server.svg" alt="" />
              <span class="text-sm text-neutral-300 font-medium leading-5"
                >Добавить сервер</span
              >
            </button>
          </div>
          <div class="select_sign_in flex items-center py-1 px-4">
            <button
              class="sign_in_btn py-2.5 text-sm text-neutral-300 font-medium leading-5 duration-200 hover:text-neutral-500"
            >
              Выход
            </button>
            <span
              class="email text-xs text-neutral-500 leading-3 font-medium truncate"
              >vita.vwvw@gmail.com</span
            >
          </div>
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
      letter-spacing: 0.01em;
      line-height: 20px;
    }
  }
  .select_menu {
    width: calc(100% - 40px);
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    .users_list {
      max-height: 132px;
      .list_item {
        padding: 11px 16px;
        cursor: pointer;
        .user_info {
          .user_name,
          .user_vk {
            letter-spacing: 0.01em;
          }
        }
      }
    }
    .select_sign_in {
      letter-spacing: 0.01em;
      gap: 27px;
    }
  }
}
</style>
