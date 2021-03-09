export const state = () => ({
  counter: 0,
  todos: [
    { title: "todo 1", description: "todo 1 description" },
    { title: "todo 2", description: "todo 2 description" },
    { title: "todo 3", description: "todo 3 description" }
  ]
});

export const mutations = {
  increment(state) {
    state.counter++;
  }
};
