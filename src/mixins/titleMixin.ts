function getTitle(vm: any): any {
  const { title } = vm.$options;
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title;
  }
  return null;
}
export default {
  created() {
    const title = getTitle(this);
    if (title) {
      document.title = title;
    }
  },
};
