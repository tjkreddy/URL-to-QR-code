import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/convert", (req,res) => {
    const url = req.body.URL;
    const qr_svg = qr.image(url, { type: 'png' });
    const qrPath = __dirname + "/qr.png";
    
    const writeStream = fs.createWriteStream(qrPath);
    qr_svg.pipe(writeStream);
    
    writeStream.on('finish', () => {
      res.sendFile(qrPath);
    });

    writeStream.on('error', (err) => {
      console.error('Error writing QR code:', err);
      res.status(500).send('Error generating QR code');
    });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
