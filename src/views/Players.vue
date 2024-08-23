<template>
  <div class="players sm:p-5 px-2 py-5 w-full overflow-hidden">
    <h3 class="title sm:mb-6 mb-5 text-lg font-semibold text-neutral-200">
      Игроки
    </h3>
    <div
      class="players_card flex items-strech rounded-tl-xl rounded-bl-xl sm:gap-5 gap-2 mb-5 sm:pr-5 pr-2 overflow-auto [&::-webkit-scrollbar]:h-0"
    >
      <div
        class="card_item sm:px-5 sm:pt-5 pb-4 p-4 rounded-xl bg-neutral-800 relative overflow-hidden"
      >
        <div class="head flex justify-between sm:mb-5 mb-8 relative z-10">
          <span
            class="flex items-center justify-center bg-neutral-800 rounded w-8 h-8"
          >
            <img src="@/assets/img/icons/total-players.svg" alt="" />
          </span>
          <button class="p-0 h-fit">
            <img src="@/assets/img/icons/card-about.svg" alt="" />
          </button>
        </div>
        <div class="card_body relative z-10">
          <div
            class="card_title mb-0.5 font-medium text-sm sm:leading-5 leading-4 text-neutral-300"
          >
            Всего игроков
          </div>
          <div class="card_num text-2xl font-semibold text-neutral-300">
            234
          </div>
        </div>
      </div>
      <div
        class="card_item px-5 pt-5 pb-4 rounded-xl bg-neutral-800 relative overflow-hidden"
      >
        <div class="head flex justify-between sm:mb-5 mb-8 relative z-10">
          <span
            class="flex items-center justify-center bg-neutral-800 rounded w-8 h-8"
          >
            <img src="@/assets/img/icons/online.svg" alt="" />
          </span>
          <button class="p-0 h-auto">
            <img src="@/assets/img/icons/card-about.svg" alt="" />
          </button>
        </div>
        <div class="card_body relative z-10">
          <div
            class="card_title mb-0.5 font-medium text-sm sm:leading-5 leading-4 text-neutral-300"
          >
            Онлайн
          </div>
          <div class="card_num text-2xl font-semibold text-neutral-300">
            120
          </div>
        </div>
      </div>
      <div
        class="card_item px-5 pt-5 pb-4 rounded-xl bg-neutral-800 relative overflow-hidden"
      >
        <div class="head flex justify-between sm:mb-5 mb-8 relative z-10">
          <span
            class="flex items-center justify-center bg-neutral-800 rounded w-8 h-8"
          >
            <img src="@/assets/img/icons/suspicious.svg" alt="" />
          </span>
          <button class="p-0 h-auto">
            <img src="@/assets/img/icons/card-about.svg" alt="" />
          </button>
        </div>
        <div class="card_body relative z-10">
          <div
            class="card_title mb-0.5 font-medium text-sm sm:leading-5 leading-4 text-neutral-300"
          >
            Подозрительных
          </div>
          <div class="card_num text-2xl font-semibold text-neutral-300">12</div>
        </div>
      </div>
      <div
        class="card_item px-5 pt-5 pb-4 rounded-xl bg-neutral-800 relative overflow-hidden"
      >
        <div class="head flex justify-between sm:mb-5 mb-8 relative z-10">
          <span
            class="flex items-center justify-center bg-neutral-800 rounded w-8 h-8"
          >
            <img src="@/assets/img/icons/pirates.svg" alt="" />
          </span>
          <button class="p-0 h-auto">
            <img src="@/assets/img/icons/card-about.svg" alt="" />
          </button>
        </div>
        <div class="card_body relative z-10">
          <div
            class="card_title mb-0.5 font-medium text-sm sm:leading-5 leading-4 text-neutral-300"
          >
            Пиратов
          </div>
          <div class="card_num text-2xl font-semibold text-neutral-300">40</div>
        </div>
      </div>
    </div>
    <div
      class="players_table_container pr-5 overflow-auto [&::-webkit-scrollbar]:h-0 rounded-tl-xl rounded-bl-xl"
    >
      <div class="players_table bg-neutral-800 p-5 rounded-xl">
        <div
          class="head flex justify-between items-center sm:mb-8 mb-5 sticky left-5 lg:w-full gap-3"
        >
          <div
            class="table_search flex items-center gap-x-2 bg-neutral-700 px-4 rounded-lg"
          >
            <button class="search_btn">
              <img src="@/assets/img/icons/search.svg" alt="" />
            </button>
            <div class="form_control w-full">
              <input
                type="text"
                class="w-full bg-transparent text-neutral-400 font-medium border-0 focus:outline-0"
                placeholder="Ник/steamid"
              />
            </div>
          </div>
          <div class="table_filter">
            <button
              class="filter_btn flex items-center gap-2 border border-neutral-700 rounded-lg duration-200 hover:bg-neutral-700"
            >
              <img
                class="min-w-4 min-h-4"
                src="@/assets/img/icons/filter.svg"
                alt="filter"
              />
              <span class="text-neutral-300 font-medium sm:block hidden"
                >Фильтры</span
              >
            </button>
          </div>
        </div>
        <table class="table w-full">
          <thead>
            <tr>
              <td
                class="py-3.5 px-5 font-medium text-xs leading-4 text-neutral-500 border-b border-neutral-700"
              >
                Игрок
              </td>
              <td
                class="py-3.5 px-5 font-medium text-xs leading-4 text-neutral-500 border-b border-neutral-700"
              >
                Тип
              </td>
              <td
                class="py-3.5 px-5 font-medium text-xs leading-4 text-neutral-500 border-b border-neutral-700"
              >
                IP адрес
              </td>
              <td
                class="py-3.5 px-5 font-medium text-xs leading-4 text-neutral-500 border-b border-neutral-700"
              >
                Местоположение
              </td>
              <td
                class="py-3.5 px-5 font-medium text-xs leading-4 text-neutral-500 border-b border-neutral-700"
              >
                Сервер
              </td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of 11" :key="item">
              <td class="py-3 px-5 border-b border-neutral-700">
                <div class="player flex items-center gap-2.5">
                  <div class="avatar relative">
                    <img src="@/assets/img/avatar.svg" alt="" />
                    <div
                      class="user_statu rounded-full p-0.5 bg-neutral-800 absolute -top-px -right-px z-2"
                    >
                      <span
                        class="block rounded-full w-2 h-2 bg-yellow-500"
                      ></span>
                    </div>
                  </div>
                  <div class="user_info">
                    <div
                      class="user_name text-sm font-medium leading-5 text-neutral-400"
                    >
                      mayorik
                    </div>
                    <div
                      class="player_status text-xs font-medium leading-4 text-neutral-600"
                    >
                      в сети
                    </div>
                  </div>
                </div>
              </td>
              <td class="py-3 px-5 border-b border-neutral-700">
                <span
                  class="bg-neutral-700 rounded-md py-1.5 px-2.5 text-xs font-medium leading-4 text-neutral-200"
                  >Лицензия</span
                >
              </td>
              <td class="py-3 px-5 border-b border-neutral-700">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-medium leading-5 text-neutral-400"
                    >192.168.0.1</span
                  >
                  <img src="@/assets/img/icons/ip-address.svg" alt="" />
                </div>
              </td>
              <td class="py-3 px-5 border-b border-neutral-700">
                <div class="flex items-center gap-2">
                  <div class="flag rounded-full w-9 h-9 overflow-hidden">
                    <img
                      class="object-cover"
                      src="@/assets/img/icons/flag.svg"
                      alt=""
                    />
                  </div>
                  <div class="player_location">
                    <div
                      class="state text-sm font-medium leading-5 text-neutral-400"
                    >
                      Russia
                    </div>
                    <div
                      class="contry text-xs font-medium leading-4 text-neutral-500"
                    >
                      Sochi
                    </div>
                  </div>
                </div>
              </td>
              <td
                class="py-3 px-5 border-b border-neutral-700 text-sm font-medium leading-5 text-neutral-400"
              >
                Trinity Rust
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.players {
  .title {
    line-height: 22px;
  }
  .players_card {
    max-width: 1020px;
    width: calc(100% + 20px);
    .card_item {
      max-width: 240px;
      width: 100%;
      min-width: 165px;
      &::before {
        content: "";
        width: 260px;
        height: 123px;
        background-color: #9333ea;
        background: url("@/assets/img/players-card-bg.png");
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
      }
      &:nth-child(2) {
        &::before {
          background: url("@/assets/img/players-card-bg2.png");
          background-size: cover;
        }
      }
      &:nth-child(3) {
        &::before {
          background: url("@/assets/img/players-card-bg3.png");
          background-size: cover;
        }
      }
      &:nth-child(4) {
        &::before {
          background: url("@/assets/img/players-card-bg4.png");
          background-size: cover;
        }
      }
      .card_body {
        .card_num {
          line-height: 29px;
        }
      }
    }
  }
  .players_table_container {
    width: calc(100% + 20px);
    .players_table {
      .head {
        .table_search {
          max-width: 364px;
          width: 100%;
          padding: 11px 16px;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          line-height: 18px;
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
        .table_filter {
          .filter_btn {
            padding: 9px 16px;
            line-height: 18px;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }
        }
      }
      .table {
        tbody {
          tr {
            position: relative;
            &:last-child {
              td {
                border: 0;
              }
            }
            td {
              position: relative;
              z-index: 2;
            }
            &::after {
              content: "";
              width: calc(100% + 40px);
              height: calc(100% + 1px);
              background: transparent;
              position: absolute;
              top: -1px;
              left: -20px;
              transition: 200ms;
            }
            &:hover {
              &::after {
                background: #404040;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .players {
    .players_card {
      .card_item {
        min-width: 173px;
      }
    }
    .players_table_container {
      .players_table {
        min-width: 1074px;
        .head {
          width: calc(100vw - 80px);
        }
      }
    }
  }
}
@media (max-width: 640px) {
  .players {
    .players_card {
      width: calc(100% + 8px);
      .card_item {
        &::before {
          width: 173px;
          height: 128px;
        }
        .card_body {
          .card_num {
            line-height: 24px;
          }
        }
      }
    }
    .players_table_container {
      .players_table {
        .head {
          width: calc(100vw - 60px);
          .table_filter {
            .filter_btn {
              padding: 11px;
            }
          }
        }
      }
    }
  }
}
</style>
