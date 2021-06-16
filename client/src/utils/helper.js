export default {
    formatTime: function (time) {

        let timeArray = time.split(':')

        if (timeArray[0] < 12) {
            return `${time} AM`;
        } else {
            timeArray[0] = timeArray[0] - 12
            return `${timeArray[0]}:${timeArray[1]} PM`;
        }
    }
}