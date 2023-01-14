let counter = 0;

const getData = () => {
  console.log("getting data ", counter++);
};
const onChangeDebounce = (callback) => {
  let timer;
  if (timer) clearTimeout(timer);
  setTimeout(() => {
    callback();
  }, 500);
};
