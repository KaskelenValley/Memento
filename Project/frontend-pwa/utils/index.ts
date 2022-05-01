export const formatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${+minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

export const secondsToHms = (seconds) => {
  let d = Number(seconds);

  if (d <= 0) {
    return "00:00:00";
  } else {
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);

    let mDisplay = m <= 9 ? "0" + m + ":" : m + ":";
    let sDisplay = s <= 9 ? "0" + s : s;

    return mDisplay + sDisplay;
  }
};

export const groupByDate = (arr) => {
  const obj = arr?.reduce((groups, record) => {
    const date = record.date.toDate().toLocaleString("en-US").split(",")[0];

    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(record);
    return groups;
  }, {});

  return Object.keys(obj)
    .sort()
    .reverse()
    .reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
};
