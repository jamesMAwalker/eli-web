import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';

import { Page } from '@/components/Page';
import { LinkButton } from '@/components/Buttons/LinkButton';
import { HeroPrimary } from '@/components/Hero/HeroPrimary';

const accessToken = process.env.NEXT_PUBLIC_STORYBLOK_TOKEN;

export const getStoryblokApi = storyblokInit({
    accessToken,
    use: [apiPlugin],
    apiOptions: {
        region: 'us',
    },
    components: {
        // Containers
        Page: Page,
        // HERO
        HeroPrimary: HeroPrimary,
        // BUTTONS
        LinkButton: LinkButton
    },
});