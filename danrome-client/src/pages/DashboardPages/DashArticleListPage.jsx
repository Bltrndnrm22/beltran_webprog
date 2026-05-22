import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import articleSeed from '../../data/article-content.js';

function DashArticleListPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Card sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
        <CardContent>
          <Typography variant="overline" color="text.secondary">Articles</Typography>
          <Typography variant="h4" sx={{ mt: 0.5, fontWeight: 800 }}>
            Dashboard Article List
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            These entries are sourced from the same data used by your public ArticleListPage.
          </Typography>
        </CardContent>
      </Card>

      <Stack spacing={2}>
        {articleSeed.map((article, index) => (
          <Card key={article.name} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}>
            <CardContent>
              <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{article.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.8 }}>
                    {article.content?.[0] || 'No content yet.'}
                  </Typography>
                </Box>
                <Chip label={`Article ${String(index + 1).padStart(2, '0')}`} />
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default DashArticleListPage;
