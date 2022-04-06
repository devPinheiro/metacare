export const ConvertMS = (ms: any) => {
  // 1- Convert to seconds:
  var seconds = ms / 1000;

  // 2- Extract hours:
  //@ts-ignore
  var hours = parseInt(seconds / 3600); // 3600 seconds in 1 hour
  //@ts-ignore

  seconds = parseInt(seconds % 3600); // extract the remaining seconds after extracting hours

  // 3- Extract minutes:
  //@ts-ignore

  var minutes = parseInt(seconds / 60); // 60 seconds in 1 minute

  // 4- Keep only seconds not extracted to minutes:
  //@ts-ignore

  seconds = parseInt(seconds % 60);

  // 5 - Format so it shows a leading zero if needed
  let hoursStr = hours;
  let minutesStr = minutes;

  return hoursStr > 0
    ? hoursStr + ' Hour ' + minutesStr + ' Mins'
    : minutesStr + ' Mins';
};

