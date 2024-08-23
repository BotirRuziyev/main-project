<template>
  <header
    class="header bg-neutral-800 border-b border-neutral-700 w-full sticky top-0 z-50"
    v-if="$route.name != 'sign-in'"
  >
    <div
      class="header_in flex items-center justify-between sm:py-3.5 sm:px-5 py-3 px-2"
    >
      <div class="burger lg:hidden block min-h-6 min-w-6 h-6">
        <button
          class="burger_btn"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="hs-offcanvas-example"
          aria-label="Toggle navigation"
          data-hs-overlay="#hs-offcanvas-example"
        >
          <img src="@/assets/img/icons/burger.svg" alt="" />
        </button>
      </div>
      <div
        class="flex items-center justify-between lg:w-full w-auto sm:gap-x-4 gap-x-7"
      >
        <div
          class="header_search flex items-center gap-x-2 sm:px-4 p-0 sm:border sm:border-neutral-700 sm:rounded-lg"
        >
          <button class="search_btn sm:min-h-4 sm:min-w-4 max-w-5 max-h-5">
            <img
              class="sm:min-w-4 sm:min-h-4 min-w-5 min-h-5"
              src="@/assets/img/icons/search.svg"
              alt=""
            />
          </button>
          <div class="form_control sm:block hidden">
            <input
              type="text"
              class="bg-transparent text-neutral-500 font-medium border-0 focus:outline-0"
              placeholder="Что-то хотите найти?"
            />
          </div>
        </div>
        <div class="flex items-center sm:gap-x-4 gap-x-7">
          <button
            class="notifications sm:w-5 sm:h-5 w-6 h-6 flex items-center justify-center relative"
          >
            <span
              class="notifications_num absolute bg-red-500 rounded-full w-3 h-3 -top-0.5 -right-0.5 flex items-center justify-center font-normal text-white"
              >8</span
            >
            <img
              class="sm:w-auto sm:h-auto w-4 h-5"
              src="@/assets/img/icons/notifications.svg"
              alt=""
            />
          </button>
          <div class="user_info">
            <div class="avatar overflow-hidden rounded-full w-8 h-8">
              <button class="user_btn">
                <img
                  class="object-cover"
                  src="@/assets/img/avatar.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  .header_in {
    .header_search {
      max-width: 364px;
      width: 100%;
      padding: 10px 16px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      .form_control {
        line-height: 18px;
        input {
          font-size: 15px;
          letter-spacing: 0.01em;
          line-height: 18px;
          &::placeholder {
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0.01em;
            color: #737373;
          }
        }
      }
    }
    .notifications {
      .notifications_num {
        font-family: var(--font-family);
        font-size: 8px;
        line-height: 11px;
        letter-spacing: 0.01em;
      }
    }
  }
}
@media (max-width: 640px) {
  .header {
    .header_in {
      .header_search {
        padding: 0;
      }
    }
  }
}
</style>
