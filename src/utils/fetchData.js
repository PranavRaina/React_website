export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '0769b66204msh0ef289d4f72f38fp18467cjsn335698917adb',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '0769b66204msh0ef289d4f72f38fp18467cjsn335698917adb',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
