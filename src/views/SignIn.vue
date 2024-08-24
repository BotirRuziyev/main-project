<template>
  <div
    class="sign-in bg-neutral-900 min-h-screen flex items-center justify-center p-5"
  >
    <Form
      class="sign-in__form sm:py-14 sm:px-20 p-5 h-auto w-full bg-neutral-800"
      v-slot="{ meta }"
      :validation-schema="schema"
    >
      <div
        class="title text-2xl text-neutral-200 text-center mb-10 font-semibold"
      >
        Вход в аккаунт
      </div>
      <div class="form_control mb-8">
        <FormInput
          type="email"
          id="email"
          label="Почта"
          placeholder="gamer@mail.ru"
          @update:modelValue="isRequiredEmail"
        />
      </div>
      <div class="form_control mb-6">
        <FormInput
          type="text"
          id="password"
          label="Пароль"
          placeholder="********"
          v-model:update:modelValue="isRequiredPassword"
        />
        <router-link
          to="#"
          class="forgot-your__password block text-base text-neutral-400 font-medium mt-2.5"
          >Забыли пароль?</router-link
        >
      </div>
      <div class="sign-in__link mb-10">
        <button
          class="w-full block font-semibold text-center p-3.5 rounded-lg"
          :class="
            isRequired
              ? 'bg-blue-600 text-neutral-200'
              : 'bg-neutral-500 text-neutral-400'
          "
        >
          Войти
        </button>
      </div>
      <div class="login-via mb-6">
        <div class="login-via__head flex items-center">
          <div
            class="login-via__head__text text-sm font-medium text-neutral-400 duration-200 whitespace-nowrap"
          >
            или войти через
          </div>
        </div>
        <div class="login-via__btn flex gap-3">
          <router-link to="#" class="steam-btn w-full flex justify-center">
            <img src="@/assets/img/icons/steam.svg" alt="" />
          </router-link>
          <router-link to="#" class="discord-btn w-full flex justify-center">
            <img src="@/assets/img/icons/discord.svg" alt="" />
          </router-link>
        </div>
      </div>
      <div
        class="cerate_accaunt text-sm text-neutral-400 font-medium text-center"
      >
        Нет аккаунта?
        <router-link to="#" class="text-neutral-200 font-semibold"
          >Создать сейчас</router-link
        >
      </div>
    </Form>
  </div>
</template>
<script setup>
import { Form, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import { ref } from "vue";
import FormInput from "@/components/UI/FormInput.vue";
const isRequired = ref(true);
// const schema = yup.object({
//   email: yup.string().required().email(),
//   password: yup.string().required().min(10),
// });
const schema = Yup.object().shape({
  email: Yup.string().email().required().label("Email Address"),
  password: Yup.string().min(10).required().label("Your Password"),
});
const isRequiredEmail = (e) => {};
const isRequiredPassword = (e) => {};
function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}
</script>
<style scoped lang="scss">
.sign-in {
  background-image: url("@/assets/img/auth_bg.png");
  background-size: cover;
  background-position: center;
  .sign-in__form {
    max-width: 558px;
    border-radius: 8px;
    .title {
      letter-spacing: 0.01em;
      line-height: 29px;
    }
    .form_control {
      .forgot-your__password {
        letter-spacing: 0.01em;
        line-height: 17px;
      }
    }
    .sign-in__link {
      button {
        font-size: 15px;
        line-height: 18px;
      }
    }
    .login-via {
      .login-via__head {
        margin-bottom: 24px;
        gap: 16px;
        &::after,
        &::before {
          content: "";
          width: 100%;
          height: 1px;
          background: #737373;
        }
        .login-via__head__text {
          line-height: 20px;
          letter-spacing: 0.01em;
        }
      }
      .login-via__btn {
        a {
          border-radius: 8px;
          padding: 11px 16px;
        }
        .steam-btn {
          background: #0f608f;
        }
        .discord-btn {
          background: #747ef9;
        }
      }
    }
    .cerate_accaunt {
      letter-spacing: 0.01em;
      line-height: 17px;
    }
  }
}
</style>
