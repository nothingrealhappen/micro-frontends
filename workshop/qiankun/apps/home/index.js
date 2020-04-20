let intervalId = false;

const render = $ => {
  const updateTime = () => {
    $('.time').html(Math.round(Date.now() / 1000));
  };

  intervalId = setInterval(updateTime, 1000);
  console.log('home render');
  return Promise.resolve();
};

(global => {
  global['home'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('purehtml mount');
      return render($);
    },
    unmount: () => {
      console.log('purehtml unmount');
      global.clearInterval(intervalId);
      return Promise.resolve();
    },
  };
})(window);
