import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

import Page from '@/components/Page';
import Teaser from '@/components/Teaser';

const accessToken = process.env.NEXT_PUBLIC_STORYBLOK_TOKEN;

export const getStoryblokApi = storyblokInit({
    accessToken,
    use: [apiPlugin],
    components: {
        page: Page,
        Teaser: Teaser
    },
});