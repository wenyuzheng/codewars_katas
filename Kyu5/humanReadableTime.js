function humanReadable(seconds) {
  const hr = zeroPad(Math.floor(seconds / 3600));
  const min = zeroPad(Math.floor((seconds / 60) % 60));
  const sec = zeroPad(Math.floor(seconds % 60));

  return hr + ":" + min + ":" + sec;
}

function zeroPad(num) {
  return num > 9 ? num.toString() : "0" + num;
}
