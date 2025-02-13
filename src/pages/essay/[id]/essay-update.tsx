import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import AppBreadcrumb from '~/components/common/AppBreadcrumbs'
import EssayViewOnly from '~/features/essay/view/EssayViewOnly'
import { RouteNames } from '~/router/route-name'

function EssayUpdate() {
  const breadcrumb = [
    { title: 'Home', href: RouteNames.Dashboard },
    { title: 'Essay', href: RouteNames.Essay },
    { title: 'View Only Essay', href: '' }
  ]

  return (
    <Container>
      <AppBreadcrumb breadcrumb={breadcrumb} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant='h4'>Essay</Typography>
      </Box>
      <EssayViewOnly />
    </Container>
  )
}

export default EssayUpdate
