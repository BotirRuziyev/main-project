<template>
  <div v-if="$route.name != 'sign-in'">
    <!-- Sidebar -->
    <div
      id="hs-offcanvas-example"
      class="sidebar hs-overlay h-screen border-r border-neutral-700 [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden lg:sticky fixed top-0 start-0 bottom-0 z-[60] lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 bg-neutral-800"
      role="dialog"
      tabindex="-1"
      aria-label="Sidebar"
    >
      <nav
        class="hs-accordion-group sm:pt-6 pt-5 px-5 pb-20 w-full h-full flex flex-col overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:bg-neutral-500"
        data-hs-accordion-always-open
      >
        <div class="close absolute -right-4 top-3 lg:hidden block">
          <button
            class="close_btn bg-neutral-800 border border-neutral-600 rounded p-1.5"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-offcanvas-example"
            aria-label="Toggle navigation"
            data-hs-overlay="#hs-offcanvas-example"
          >
            <img src="@/assets/img/icons/close.svg" alt="" />
          </button>
        </div>
        <div class="logo text-lg text-neutral-200 font-medium sm:mb-11 mb-8">
          LOGOOOO
        </div>
        <ul>
          <li class="hs-accordion" id="users-accordion">
            <button
              type="button"
              class="hs-accordion-toggle w-full py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
              aria-expanded="true"
              aria-controls="users-accordion"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.99998 7.33333C7.47274 7.33333 8.66665 6.13943 8.66665 4.66667C8.66665 3.19391 7.47274 2 5.99998 2C4.52722 2 3.33331 3.19391 3.33331 4.66667C3.33331 6.13943 4.52722 7.33333 5.99998 7.33333Z"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66665 10H3.99998C3.29274 10 2.61446 10.281 2.11436 10.781C1.61426 11.2811 1.33331 11.9594 1.33331 12.6667V14"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.4666 10.9333L13.8666 10.7333"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.1333 9.26665L9.53333 9.06665"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.0667 12.4666L11.2666 11.8666"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.7333 8.13332L12.9333 7.53333"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.0667 12.4667L12.8 11.8"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.2 8.19999L10.9333 7.53333"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.53333 11.0667L10.2 10.8"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.8 9.20002L14.4667 8.93335"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Модерация
              <svg
                class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
              <svg
                class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <div
              id="users-accordion"
              class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-9 mb-6"
              role="region"
              aria-labelledby="users-accordion"
            >
              <ul class="">
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    :class="$route.name == 'players' ? 'bg-neutral-700' : ''"
                    to="/players"
                  >
                    Игроки
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Чат
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Проверки
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Репорты
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Рисунки
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Оповещения
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 text-start flex text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Блокировки
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="hs-accordion" id="users-accordion">
            <button
              type="button"
              class="hs-accordion-toggle w-full py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
              aria-expanded="false"
              aria-controls="users-accordion"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2.66663H9.33331"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.66667 2.66663H2"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 8H8"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33333 8H2"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 13.3334H10.6667"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 13.3334H2"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.33331 1.33337V4.00004"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33331 6.66663V9.33329"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.6667 12V14.6667"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Управление

              <svg
                class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>

              <svg
                class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              id="users-accordion"
              class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-9 mb-6"
              role="region"
              aria-labelledby="users-accordion"
            >
              <ul>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Журнал аудита
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Интеграции
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Сервера
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Настройки 9+
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="hs-accordion" id="users-accordion">
            <button
              type="button"
              class="hs-accordion-toggle w-full py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
              aria-expanded="false"
              aria-controls="users-accordion"
            >
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 12.3333C13.6869 12.3333 14.0261 12.1929 14.2761 11.9428C14.5262 11.6928 14.6666 11.3536 14.6666 11V4.33333C14.6666 3.97971 14.5262 3.64057 14.2761 3.39052C14.0261 3.14048 13.6869 3 13.3333 3H8.06665C7.84366 3.00219 7.62368 2.94841 7.42685 2.84359C7.23002 2.73877 7.06262 2.58625 6.93998 2.4L6.39998 1.6C6.27857 1.41565 6.1133 1.26432 5.91898 1.1596C5.72466 1.05488 5.50738 1.00004 5.28665 1H2.66665C2.31302 1 1.97389 1.14048 1.72384 1.39052C1.47379 1.64057 1.33331 1.97971 1.33331 2.33333V11C1.33331 11.3536 1.47379 11.6928 1.72384 11.9428C1.97389 12.1929 2.31302 12.3333 2.66665 12.3333H13.3333Z"
                  stroke="#D4D4D4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Проект
              <svg
                class="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
              <svg
                class="hs-accordion-active:hidden ms-auto block size-4 text-gray-600 group-hover:text-gray-500 text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              id="users-accordion"
              class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden pl-9 mb-6"
              role="region"
              aria-labelledby="users-accordion"
            >
              <ul class="">
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Настройки
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 mb-1.5 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Сотрудники
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="flex items-center py-2 px-3 text-start flex items-center text-sm text-neutral-300 rounded-lg gap-2 duration-200 hover:bg-neutral-700"
                    to="#"
                  >
                    Платежи
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <FormSelect />
    </div>
    <!-- End Sidebar -->
  </div>
</template>
<script setup>
import FormSelect from "./UI/FormSelect.vue";
</script>

<style lang="scss" scoped>
.sidebar {
  width: 260px;
  .hs-accordion {
    .hs-accordion-toggle {
      font-family: var(--font-family);
      line-height: 20px;
      letter-spacing: 0.01em;
    }
    .hs-accordion-content {
      position: relative;
      margin-bottom: 0;
      &::after {
        content: "";
        height: 100%;
        width: 2px;
        background: #404040;
        position: absolute;
        top: 0;
        left: 24px;
      }
      a {
        font-family: var(--font-family);
        line-height: 20px;
        letter-spacing: 0.01em;
      }
    }
  }
  .hs-accordion.active {
    .hs-accordion-toggle {
      background-color: #404040;
    }
    .hs-accordion-content {
      margin-bottom: 24px;
    }
  }
}
</style>
