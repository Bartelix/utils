function throttle(callback, delay) {
  let wait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs == null) wait = false;
    else {
      callback(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (wait) {
      waitingArgs = args;
      return;
    }

    callback(...args);
    wait = true;

    setTimeout(timeoutFunc, delay);
  };
}
