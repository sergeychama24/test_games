const express = require('express');
const fetch = require('node-fetch').default;
const cors  = require('cors'); 

const app = express();

app.use(cors({ origin: 'http://localhost:8080' }));

app.use('/api/games', async (req, res) => {
  const url = 'https://belparyaj.com/pragmatic/game/list?partner_name=belparyaj';
  try {
    const response = await fetch(url, {
      headers: {
        Host: 'belparyaj.com',
        'User-Agent': 'Mozilla/5.0 (Windows NT)',
      },
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: `Upstream error: ${response.statusText}` });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Internal proxy error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Proxy running on http://localhost:${PORT}/api/games`)
);