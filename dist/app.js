"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_storage_1 = require("./data-storage");
const app = express_1.default();
const port = 3000;
app.get('/languages', (req, res) => {
    let languages = data_storage_1.GetLanguages();
    res.send(languages);
});
app.listen(port, () => {
    console.log(`Server is running at ${port} port.`);
});
