/*


*/

function successfullMessage(msg) {
    return "✅ *Xtroid*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Xtroid*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Xtroid*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
