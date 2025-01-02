import express from 'express';
import { getProducts, getProductById, createProduct } from './database.js';

const app = express();
app.use(express.json());

app.get('/products', async (_req, res) => {
    const data = await getProducts();
    res.send(data);
});

app.get('/products/:id', async (_req, res) => {
    const id = _req.params.id;
    const data = await getProductById(id);
    res.send(data);
});

app.post('/products', async (_req, res) => {
    const { title, description, image } = _req.body;
    const data = await createProduct(title, description, image);
    res.status(201).send(data);
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
