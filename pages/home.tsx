import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { SearchInput } from '../src/components/molecules/SearchInput';
import { TrendWord } from '../src/components/molecules/TrendWord';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box mt={4} mb={2}>
        <SearchInput />
      </Box>
      <Box>
        <TrendWord />
      </Box>
    </Container>
  );
}
