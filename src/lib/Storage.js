const {
  AsyncStorage,
} = React;

export async function set(key, value) {
  let ret = null;

  try {
    ret = JSON.stringify(value);
  } catch (err) {
    ret = value;
  }

  await AsyncStorage.setItem(key, ret);
}

export async function get(key) {
  const value = await AsyncStorage.getItem(key);
  if (!value) return value;

  try {
    const ret = JSON.parse(value);
    return ret;
  } catch (err) {
    return value;
  }
}
