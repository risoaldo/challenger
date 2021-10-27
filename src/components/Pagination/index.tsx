import { Stack, Pagination as Page } from "@mui/material";

export function Pagination() {
  return (
    <Stack spacing={2} alignItems="flex-end" marginTop="5px">
      <Page count={5} variant="outlined" shape="rounded" />
    </Stack>
  );
}
