import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useAuth } from "../../utils/auth";

import { getAllFeedback, getAllSites } from '../../lib/db-admin'
export async function getStaticProps(context) {
  const siteId = context.params.siteId
  const { feedback } = await getAllFeedback(siteId)
  return {
    props: {
      initialFeedback: feedback,
    },
    revalidate: 1,
  }
}
export async function getStaticPaths() {
  const { sites } = await getAllSites()
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }))
  return {
    paths,
    fallback: true,
  }
}
const FeedbackPage = ({ initialFeedback }) => {
  const router = useRouter()
  return <Box>Site ID: ${router.query.siteId}</Box>
}
export default FeedbackPage