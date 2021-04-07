function superbowlWin(record) {
    let win = record.find(obj => obj.result === "W")
    if (win != undefined) {
        return win.year
    }
    return undefined
}