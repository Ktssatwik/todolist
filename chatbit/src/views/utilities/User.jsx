// views/utilities/User.jsx
import { useState } from 'react';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';

export default function User() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [documents, setDocuments] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newEntry = { question: input, answer: 'This is a mock response.' };
    setChat((prev) => [...prev, newEntry]);
    setDocuments(['Document 1.pdf', 'Document 2.pdf']);
    setInput('');
  };

  return (
    <Box p={3}>
      {/* <Box display="flex" gap={2} mb={2}>
        <Button variant="contained" color="primary">
          Home - User
        </Button>
        <Button variant="outlined" color="secondary">
          Home - Admin
        </Button>
      </Box> */}

      <Typography variant="h5" gutterBottom>
        User Chatbot
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Ask a Question
        </Typography>
        <Box display="flex" gap={1} mb={2}>
          <TextField fullWidth variant="outlined" label="Type your question..." value={input} onChange={(e) => setInput(e.target.value)} />
          <Button variant="contained" onClick={handleSend}>
            Send
          </Button>
        </Box>

        <Box maxHeight="250px" overflow="auto">
          {chat.map((entry, i) => (
            <Box key={i} mb={2}>
              <Typography color="primary">
                <strong>User:</strong> {entry.question}
              </Typography>
              <Typography>
                <strong>Bot:</strong> {entry.answer}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {documents.length > 0 && (
        <Paper sx={{ p: 2, backgroundColor: '#f3e5f5' }}>
          <Typography variant="h6">Related Documents (Purple)</Typography>
          <ul>
            {documents.map((doc, i) => (
              <li key={i}>
                <Typography>{doc}</Typography>
              </li>
            ))}
          </ul>
        </Paper>
      )}
    </Box>
  );
}
