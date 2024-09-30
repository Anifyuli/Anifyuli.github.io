<script setup>

</script>

<template>
  <div class="container mx-auto p-4">
    <div class="card lg:card-side">
      <!-- Profile picture -->
      <figure class="px-10 pt-10">
        <div class="avatar">
          <div class="w-48 md:w-64 lg:w-72 xl:w-96 rounded-full">
            <img src="/src/assets/img/avatar.jpg" alt="Avatar" />
          </div>
        </div>
      </figure>
      <!-- Card body -->
      <div class="card-body lg:mx-32 xl:mx-12 justify-center">
        <h1 class="card-title text-2xl md:text-3xl font-bold mb-4 justify-center">Moh. Anif Yuliansyah (He/him)</h1>
        <div class="space-y-4">
          <div class="flex items-center">
            <img class="w-8 h-8 mr-3" src="/public/svg/programmer.svg" alt="Programmer icon" />
            <h3>Self taught programmer</h3>
          </div>
          <div class="flex items-center">
            <img class="w-8 h-8 mr-3" src="/public/svg/open-source.svg" alt="Open source icon" />
            <h3>FLOSS enthusiast</h3>
          </div>
          <div class="flex items-center">
            <img class="w-8 h-8 mr-3" src="/public/svg/linux.svg" alt="Linux icon" />
            <h3>Fulltime Linux user</h3>
          </div>
        </div>
        <div class="my-2">
          <h2 class="text-center">Nice to meet you 👋🏼</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>