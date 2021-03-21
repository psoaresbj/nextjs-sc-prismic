export const extractFromData = (data, partial) => {
  const object = {};

  if (!data) {
    return {};
  }

  Object.keys(data).map(key => {
    if (data[key] && key.startsWith(`${partial}_`)) {
      const newKey = key.substring(partial.length + 1);

      object[newKey] = data[key];
    }
  });

  return object;
};
