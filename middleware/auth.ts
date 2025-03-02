import { useAuth } from "~/composables/useAuth";
import type { AuthUserType } from "~/types/AuthType";

export default defineNuxtRouteMiddleware((to, from) => {
  const { isTokenExpired } = useAuth;

  let authStore = JSON.parse(localStorage.getItem('AuthStore') || '{}') as { authUser: AuthUserType }
  if (!authStore) {
    return navigateTo('/login')
  }

  const token = authStore?.authUser?.optional?.token || null;

  // const token = localStorage.getItem("_token");
  const lastVisited = localStorage.getItem("_lastVisited");

  console.log("lastVisited aa", lastVisited);

  if (to.path === "/login") {
    if (token) {
      return navigateTo("/");
    }

    return;
  }

  if (isTokenExpired()) {
    if (token === null) return navigateTo("/login");
    localStorage.removeItem("_token");
    localStorage.removeItem("expired");
    navigateTo("/login");
  }

  if (!!lastVisited) {
    navigateTo(lastVisited);
  }
});
