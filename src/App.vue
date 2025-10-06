<template>
    <HeaderLayout />
    <CompetencySection />
    <SupportSection />
    <ExpertiseSection />
    <TariffsSection />
    <ReviewsSection />
    
    <FooterLayout />
</template>

<script setup lang='ts'>

import FooterLayout from './components/layout/FooterLayout.vue';
import HeaderLayout from './components/layout/HeaderLayout.vue';
import CompetencySection from './components/sections/CompetencySection.vue';
import ExpertiseSection from './components/sections/ExpertiseSection.vue';
import ReviewsSection from './components/sections/ReviewsSection.vue';
import SupportSection from './components/sections/SupportSection.vue'
import TariffsSection from './components/sections/TariffsSection.vue';

</script>


<style scoped>

</style>
