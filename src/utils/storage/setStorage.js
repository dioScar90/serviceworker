export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
