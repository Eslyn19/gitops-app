import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ 
      status: 'healthy', 
      version: process.env.APP_VERSION || '1.0.0' });
});

app.get('/', (req, res) => {
  res.json({ 
      message: 'GitOps Pipeline Demo', 
      timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});