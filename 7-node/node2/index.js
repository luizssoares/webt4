import http from "http";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { createLink } from "./util.js";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT;
const directory = process.argv[2];

function createHtmlPage(files) {
    return `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <title>Lista de Arquivos</title>
        </head>
        <body>
            <ul>
                ${files.map(file => `<li>${createLink(file)}</li>`).join("")}
            </ul>
        </body>
        </html>
    `;
}

function createFilePage(fileName, fileContent) {
    return `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <title>${fileName}</title>
        </head>
        <body>
            <a href="/">Voltar</a>
            <pre>${fileContent}</pre>
        </body>
        </html>
    `;
}

const server = http.createServer(async (req, res) => {
    try {
        const url = req.url;
        
        if (url === "/") {
            const files = await fs.promises.readdir(directory);
            const html = createHtmlPage(files);
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        }
         else if (url.startsWith("/file/")) {
            const fileName = decodeURIComponent(url.substring("/file/".length));
            const filePath = path.join(directory, fileName);
            const fileContent = await fs.promises.readFile(filePath, "utf-8");
            const html = createFilePage(fileName, fileContent);
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
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
    console.log("O servidor está rodando na porta:", PORT);
    console.log("O modo de ambiente é:", process.env.NODE_ENV);
});
