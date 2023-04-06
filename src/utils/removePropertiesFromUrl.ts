const removePropertiesFromUrl = (url: string, properties: string[]): string => {
  properties.forEach(property => {
    const regex = new RegExp(`,(\\s*)${property}`);

    if (url.includes(property)) {
      url = url.replace(regex, '');
    } else {
      url = url.replace(property, '');
    }
  });

  return url;
};

export default removePropertiesFromUrl;
