function towelSort(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            result.push(array[i][j]);
        }
    }
    return result
}
