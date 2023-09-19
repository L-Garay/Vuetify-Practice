<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from '../assets/icons/IconDocumentation.vue';
import DollarSign from '../assets/icons/DollarSign.vue';
import EcosystemIcon from '../assets/icons/IconEcosystem.vue';
import CommunityIcon from '../assets/icons/IconCommunity.vue';
import SupportIcon from '../assets/icons/IconSupport.vue';
</script>

<template>
  <div class="items">
    <WelcomeItem>
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Your Music</template>
      Find and enjoy your favorite artists and music on Spue, the worlds largest music streaming
      service using Vue.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Organize</template>
      Create unlimted playlists and organize your music the way you want to. Choose from various
      themes and colors to customize your experience.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Ecosystem</template>

      Join millions of other fans and musicians on Spue, find new and unique fan created playlists
      (or official ones), and enjoy thousands of custom radio stations and podcasts.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <div>
          <DollarSign />
          <DollarSign />
        </div>
      </template>
      <template #heading>Pricing</template>
      Already have an app to keep track of all the apps you are already paying for? Don't worry, we
      won't make your life any harder. Spue is free to use, with no ads, and no premium features.
      Just music. Forever.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Community</template>
      Connect with other fans and discuss your favorite artists, albums, and songs and concerts.
      Share your playlists and discover new music. Spue is the best place to find new music and
      connect with other fans.
    </WelcomeItem>
  </div>
</template>

<style scoped>
/* .items {
  max-width: 600px;
} */
.dollarSign:last-of-type {
  margin-left: -10px;
}
</style>
```
