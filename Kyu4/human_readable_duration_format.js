function formatDuration(seconds) {
  if (seconds === 0) return "now";

  const durations = {
    year: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  };

  durations["year"] = Math.floor(seconds / (365 * 24 * 60 * 60));
  durations["day"] = Math.floor(
    (seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)
  );
  durations["hour"] = Math.floor(
    ((seconds % (366 * 24 * 60 * 60)) % (24 * 60 * 60)) / (60 * 60)
  );
  durations["minute"] = Math.floor(
    (((seconds % (366 * 24 * 60 * 60)) % (24 * 60 * 60)) % (60 * 60)) / 60
  );
  durations["second"] = Math.floor(
    (((seconds % (366 * 24 * 60 * 60)) % (24 * 60 * 60)) % (60 * 60)) % 60
  );

  return durations;
}

console.log(formatDuration(0)); // "now"
console.log(formatDuration(1)); // "1 second"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(120)); // "2 minutes"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(368 * 24 * 60 * 60 + 3600 * 2.5));
