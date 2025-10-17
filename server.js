import express from 'express';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRoutes);

const PORT = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});