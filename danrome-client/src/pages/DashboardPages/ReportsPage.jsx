import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';

const monthlyVisits = [1800, 2200, 2100, 2600, 2900, 3100];
const monthlySignups = [420, 510, 490, 620, 710, 760];

const sourceShare = [
  { id: 0, value: 46, label: 'Direct' },
  { id: 1, value: 28, label: 'Social' },
  { id: 2, value: 18, label: 'Referral' },
  { id: 3, value: 8, label: 'Ads' },
];

const conversionRate = [2.8, 3.1, 3.0, 3.4, 3.7, 3.9];

const cardSx = {
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 2,
  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.06)',
};

function ReportsPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Card sx={cardSx}>
        <CardContent>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={2}>
            <Box>
              <Typography variant="overline" color="text.secondary">
                Reports
              </Typography>
              <Typography variant="h4" sx={{ mt: 0.5, fontWeight: 800 }}>
                Analytics Overview
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 700 }}>
                Track traffic, signups, conversion trends, and traffic source distribution in one view.
              </Typography>
            </Box>
            <Chip label="Updated just now" color="primary" sx={{ alignSelf: 'flex-start' }} />
          </Stack>
        </CardContent>
      </Card>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', xl: '1.2fr 0.8fr' },
          gap: 2,
        }}
      >
        <Card sx={cardSx}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Visits vs Signups
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monthly comparison over the last 6 months.
            </Typography>
            <Box sx={{ mt: 2, width: '100%', overflowX: 'auto' }}>
              <BarChart
                height={320}
                xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], scaleType: 'band' }]}
                series={[
                  { data: monthlyVisits, label: 'Visits' },
                  { data: monthlySignups, label: 'Signups' },
                ]}
              />
            </Box>
          </CardContent>
        </Card>

        <Card sx={cardSx}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Traffic Sources
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Distribution by acquisition channel.
            </Typography>
            <Stack alignItems="center" sx={{ mt: 2 }}>
              <PieChart series={[{ data: sourceShare }]} width={280} height={280} />
            </Stack>
          </CardContent>
        </Card>
      </Box>

      <Card sx={cardSx}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Conversion Rate Trend
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Percentage of visits that converted into registered users.
          </Typography>
          <Box sx={{ mt: 2, width: '100%', overflowX: 'auto' }}>
            <LineChart
              height={300}
              xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], scaleType: 'point' }]}
              series={[{ data: conversionRate, label: 'Conversion %' }]}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ReportsPage;
