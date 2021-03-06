export class DateHelper {
    static getLocalDateString(UTCDateString) {
        const localDate = new Date(UTCDateString);

        const dateFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        const dateFormat = Intl.DateTimeFormat("default", dateFormatOptions);

        const hourFormatOptions = {
            hour: "numeric",
            minute: "2-digit"
        };
        const hourFormat = Intl.DateTimeFormat("default", hourFormatOptions);

        return `${dateFormat.format(localDate)} at ${hourFormat.format(localDate)}`;

        //shout-out to max
    }

    static getSpan(UTCDateString) {
        const time = new Date(UTCDateString).getTime();
        const now = new Date().getTime();
        return time - now;
    }

    static getCountDownString(span) {
        const days = Math.floor(span / (1000 * 60 * 60 * 24));
        const hours = Math.floor((span % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((span % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((span % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}