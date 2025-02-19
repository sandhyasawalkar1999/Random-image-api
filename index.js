const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/api/image/random", async (req, res) =>{
  try {

    const imageUrl = `https://picsum.photos/500/300`;
    res.json({ imageUrl });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
})