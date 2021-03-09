<template>
  <div class="container">
    <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
      <div class="px-6 py-4">
        <span
          class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker"
        >Hello World</span>
      </div>
    </div>

    <h1>{{message}}</h1>

    <br />

    <div
      v-for="todo in todos"
      :key="todo.title"
      class="max-w-xs rounded overflow-hidden shadow-lg my-2"
    >
      <div class="px-6 py-4">
        <h1>{{todo.title}}</h1>
        <h4>{{todo.description}}</h4>
      </div>
    </div>

    <div
      v-for="todo in todos"
      :key="todo.title"
      class="max-w-xs rounded overflow-hidden shadow-lg my-2"
    >
      <div class="px-6 py-4">
        <h1>{{todo.title}}</h1>
        <h4>{{todo.description}}</h4>
      </div>
    </div>

    <div
      v-for="todo in todos"
      :key="todo.title"
      class="max-w-xs rounded overflow-hidden shadow-lg my-2"
    >
      <div class="px-6 py-4">
        <h1>{{todo.title}}</h1>
        <h4>{{todo.description}}</h4>
      </div>
    </div>

    <div
      v-for="todo in todos"
      :key="todo.title"
      class="max-w-xs rounded overflow-hidden shadow-lg my-2"
    >
      <div class="px-6 py-4">
        <h1>{{todo.title}}</h1>
        <h4>{{todo.description}}</h4>
      </div>
    </div>

    <div
      v-for="todo in todos"
      :key="todo.title"
      class="max-w-xs rounded overflow-hidden shadow-lg my-2"
    >
      <div class="px-6 py-4">
        <h1>{{todo.title}}</h1>
        <h4>{{todo.description}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "you, test",
    };
  },
  data: function () {
    return {
      message: "yo!",
    };
  },
  mounted() {
    console.log(this.$store.state.auth.isAuthenticated);
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style>
</style>
