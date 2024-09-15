// saveDiary.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { date, time, content } = req.body;
  
      // Here you would typically save the diary data to your database or storage
      // For demonstration purposes, we'll just log it
      console.log('Received diary data:', { date, time, content });
  
      // Simulate saving and return a response
      setTimeout(() => {
        res.status(200).json({ message: 'Diary saved successfully' });
      }, 1000); // Simulating a delay
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  