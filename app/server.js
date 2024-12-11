const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 5000;

// Servir archivos estáticos
app.use(express.static("public"));

// Configuración de Socket.IO
io.on("connection", (socket) => {
    console.log("Un cliente se ha conectado.");

    // Escuchar eventos personalizados
    socket.on("message", (msg) => {
        console.log("Mensaje recibido:", msg);

        // Responder a todos los clientes conectados
        io.emit("message", `Servidor dice: ${msg}`);
    });

    // Evento de desconexión
    socket.on("disconnect", () => {
        console.log("Un cliente se ha desconectado.");
    });
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor WebSocket escuchando en http://localhost:${PORT}`);
});
