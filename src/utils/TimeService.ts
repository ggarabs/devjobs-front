const getTimeAgo = (timeStamp: Date): string => {
    let timeAgo = Date.now() - timeStamp.getTime();

    if (Math.floor(timeAgo / (1000 * 60 * 60 * 24)) > 0) return Math.floor(timeAgo / (1000 * 60 * 60 * 24)) + 'd ago';
    else if (Math.floor(timeAgo / (1000 * 60 * 60)) > 0) return Math.floor(timeAgo / (1000 * 60 * 60)) + 'h ago';
    else if (Math.floor(timeAgo / (1000 * 60)) > 0) return Math.floor(timeAgo / (1000 * 60)) + 'm ago';
    else if (timeAgo / 1000 > 0) return Math.floor(timeAgo / 1000) + 's ago';

    return timeAgo + 'ms ago';
};

export default getTimeAgo