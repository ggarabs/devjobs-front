const getTimeAgo = (timeStamp: Date): string => {
    let timeAgo = Date.now() - timeStamp.getTime();

    const timeUnit = ['ms', 's', 'min', 'h', 'd', 'w', 'm', 'y'];
    const values = [1000, 60, 60, 24, 7, (30 / 7), (365 / 30)]

    let quocient = 1;
    for (let i = 0; i < values.length; i++) {
        if (timeAgo < quocient * values[i]) return Math.floor(timeAgo / quocient) + timeUnit[i] + " ago";
        quocient *= values[i];
    }

    return Math.floor(timeAgo / quocient) + 'y ago';
};

export default getTimeAgo