(global => {
  global['nav'] = {
    bootstrap: () => {
      console.log('nav bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('nav mount');
      return Promise.resolve();
    },
    unmount: () => {
      console.log('nav unmount');
      return Promise.resolve();
    },
  };
})(window);
