function createLink(fileName) {
    return `<a href="/file/${encodeURIComponent(fileName)}">${fileName}</a>`;
}
module.exports = { createLink };