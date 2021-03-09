<template>
  <nav class="navbar w-full h-18 bg-white shadow mx-auto px-4">
    <div class="flex items-center justify-between py-4">
      <NuxtLink to="/">
        <img src="favicon.ico" class="w-10 h-10 text-purple-600" />
      </NuxtLink>

      <div class="hidden sm:flex sm:items-center">
        <NuxtLink to="/" class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Home</NuxtLink>
        <NuxtLink
          to="about"
          class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
        >About</NuxtLink>
        <NuxtLink
          to="contact"
          class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
        >Conatct Us</NuxtLink>
      </div>

      <div class="hidden sm:flex sm:items-center">
        <NuxtLink
          to="user/login"
          class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
        >Log in</NuxtLink>
        <NuxtLink
          to="user/register"
          class="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
        >Sign up</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  /* position: fixed; */
  left: 0;
  top: 0;
}
</style>