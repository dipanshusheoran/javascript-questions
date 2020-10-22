// Convert seconds into hours, minutes and seconds

function secsToTime(secs)
{
    var hours = Math.floor(secs / (60 * 60));

    var minutes_divisor = secs % (60 * 60);
    var minutes = Math.floor(minutes_divisor / 60);

    var seconds_divisor = minutes_divisor % 60;
    var seconds = Math.ceil(seconds_divisor);

    console.log("Hours :" + hours)
    console.log("Minutes :" + minutes)
    console.log("Seconds :" + seconds)
}
// Example :
secsToTime(366345)
