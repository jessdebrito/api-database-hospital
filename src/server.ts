import { app } from "./app";

const PORT = process.env.API_PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))