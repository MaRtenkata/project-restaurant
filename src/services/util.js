export function halfFirst(arr) {
    let half = Math.ceil(arr.length / 2);

    let firstHalf = arr.slice(0, half);
    return firstHalf;
}

export function halfsSecond(arr) {
    let half = Math.ceil(arr.length / 2);

    let secondHalf = arr.slice(-half);
    return secondHalf
}