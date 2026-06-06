import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { createArticle, getArticles } from '../../services/ArticleService';

const blankForm = {
  title: '',
  image: '',
  content: '',
};

function DashArticleListPage() {
  const [articles, setArticles] = useState(() => getArticles());
  const [form, setForm] = useState(blankForm);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setError('');
    setMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const article = createArticle(form);
      setArticles((prev) => [article, ...prev]);
      setForm(blankForm);
      setMessage('Article added successfully.');
      setError('');
    } catch (err) {
      setError(err.message || 'Unable to add article.');
      setMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Card sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
        <CardContent>
          <Typography variant="overline" color="text.secondary">Articles</Typography>
          <Typography variant="h4" sx={{ mt: 0.5, fontWeight: 800 }}>
            Add Article
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Add an article using an image URL link. Saved articles appear on the public articles page.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                name="title"
                label="Article title"
                value={form.title}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                name="image"
                label="Image URL link"
                value={form.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                type="url"
                fullWidth
                required
              />
              {form.image ? (
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    aspectRatio: '4 / 3',
                    overflow: 'hidden',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'grey.100',
                  }}
                >
                  <Box
                    component="img"
                    src={form.image}
                    alt="Article preview"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              ) : null}
              <TextField
                name="content"
                label="Article content"
                value={form.content}
                onChange={handleChange}
                multiline
                rows={5}
                fullWidth
                required
              />
              {error ? <Alert severity="error">{error}</Alert> : null}
              {message ? <Alert severity="success">{message}</Alert> : null}
              <Button type="submit" variant="contained" sx={{ alignSelf: 'flex-start' }}>
                Add Article
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>

      <Stack spacing={2}>
        {articles.map((article, index) => (
          <Card key={article.name} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
            <CardContent>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Box
                  component="img"
                  src={article.image}
                  alt={article.title}
                  sx={{
                    width: { xs: '100%', sm: 160 },
                    aspectRatio: '4 / 3',
                    objectFit: 'cover',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                />
                <Stack sx={{ minWidth: 0, flex: 1 }} spacing={1}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={1}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{article.title}</Typography>
                    <Chip label={`Article ${String(index + 1).padStart(2, '0')}`} />
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {article.content?.[0] || 'No content yet.'}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default DashArticleListPage;
