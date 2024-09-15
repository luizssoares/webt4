import http from "http";
import fs from "fs/promises";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const PUBLIC = path.join(process.cwd(), "public");

function generateLoremIpsum(num) {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus sem quis augue hendrerit, sit amet fermentum mi condimentum. Vivamus nec varius libero. Nulla facilisis posuere enim eu aliquet. Aliquam tristique lacus eu eros laoreet, quis imperdiet augue sagittis. Aliquam ac euismod sapien. Cras bibendum interdum iaculis. Donec finibus volutpat dictum. Aenean vel augue odio. Morbi condimentum nisi a ipsum mattis elementum. Duis consequat risus quis erat molestie, id hendrerit eros pharetra. Nulla quis ultrices est. Aliquam nisl nibh, ultrices id dignissim a, tristique et ipsum. Suspendisse bibendum non elit eu consectetur. Cras sit amet erat ut ante convallis lobortis. Cras pretium quam massa, vel egestas urna pharetra eu."
    return Array.from({ length: num }, () => `<p>${lorem}</p>`).join("");
}

const server = http.createServer(async (req, res) => {
    try {
        const url = req.url;
        if (url === "/") {
            const filePath = path.join(PUBLIC, "index.html");
            const content = await fs.readFile(filePath);
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(content);
        } 
        else if (url === "/style.css") {
            const filePath = path.join(PUBLIC, "style.css");
            const content = await fs.readFile(filePath);
            res.writeHead(200, {"Content-Type": "text/css"});
            res.end(content);
        } 
        else if (url === "/script.js") {
            const filePath = path.join(PUBLIC, "script.js");
            const content = await fs.readFile(filePath);
            res.writeHead(200, {"Content-Type": "application/javascript"});
            res.end(content);
        } 
        else if (url.startsWith("/generate")) {
            const urlParams = new URLSearchParams(url.split("?")[1]);
            const numParagrafo = parseInt(urlParams.get("num"), 10);
            const content = generateLoremIpsum(numParagrafo);
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(content);
        } 
        else {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.end("Página não encontrada.");
        }
    } 
    catch (err) {
        console.error(err);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("Erro ao processar a solicitação.");
    }
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
