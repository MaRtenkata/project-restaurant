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


export function checkAdmin(currentUser) {
    if (currentUser) {
      if (currentUser.email === 'martin.shindarski@outlook.com') {
        return true
      } else if (currentUser.email === null) {
        return false
      }
    }
}