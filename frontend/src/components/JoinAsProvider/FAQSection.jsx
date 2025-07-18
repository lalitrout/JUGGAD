import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: 'What can I sell?',
    answer:
      "Be creative! You can offer any service you wish as long as it's legal and complies with our terms. There are over 200 categories you can browse to get ideas.",
  },
  {
    question: 'How much money can I make?',
    answer:
      "It's totally up to you. You can work as much as you want. Many sellers work on Fiverr full time and some keep their 9-5 job while using Fiverr to make extra money.",
  },
  {
    question: 'How much does it cost?',
    answer:
      "It's free to join Fiverr. There is no subscription required or fees to list your services. You keep 80% of each transaction.",
  },
  {
    question: 'How much time will I need to invest?',
    answer:
      "It's very flexible. You need to put in some time and effort in the beginning to learn the marketplace and then you can decide for yourself what amount of work you want to do.",
  },
  {
    question: 'How do I price my service?',
    answer:
      'With Gig Packages, you set your pricing anywhere from $5 - $995 and offer three versions of your service at three different prices.',
  },
  {
    question: 'How do I get paid?',
    answer:
      "Once you complete a buyer's order, the money is transferred to your account. No need to chase clients for payments and wait 60 or 90 days for a check.",
  },
];

const FAQSection = () => {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, backgroundColor: '#f7f9fc' }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        color="primary.main"
        mb={4}
      >
        Q&A
      </Typography>

      <Grid container spacing={4}>
        {faqData.map((faq, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Accordion elevation={1} sx={{ borderRadius: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold" color="primary.main">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FAQSection;
