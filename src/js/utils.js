// Shortcut to get elements
export const el = function (element) {
  if (element.charAt(0) === "#") {
    // If passed an ID...
    return document.querySelector(element); // ... returns single element
  }

  return document.querySelectorAll(element); // Otherwise, returns a nodelist
};

// Add a space every 3 figures
export const formatNumber = function (num) {
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
};
