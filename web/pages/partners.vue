<template>
  <div class="w-full">
    <Hero :image="hero.image" :full-height="hero.fullHeight" :title="title[locale]" :bg-color="hero.bgColor"
    x-axis-location="start" class="mb-2 md:mb-8" :class="hero.fullHeight ? '' : 'h-24 overflow-hidden'" />
    <div v-if="shareMenu"
    class="h-screen fixed items-center top-0 left-0 -mt-16 z-10 pointer-events-none flex">
      <SideShareMenu class="pointer-events-auto" :share-menu="shareMenu" :scroll-distance="600" />
    </div>
    <div class="w-full flex flex-wrap mb-8">
      <div class="w-full md:w-1/2 my-1/2 md:pr-2">
        <youtube player-width="100%" player-height="100%"
        class="video-responsive flex-grow"
        :video-id="getYoutubeId(videoUrl)"  />
      </div>
      <div class="w-full md:w-1/2 text-white leading-tight md:pl-2">
        <div id="block1" class="text-2xl p-8 md:px-16 bg-blue h-full flex justify-center items-center">
          <BlockContent :blocks="this[`${locale}Block1Text`]" />
        </div>
      </div>
    </div>
    <div class="w-full bg-blue p-8 px-12 lg:px-8 mb-8">
      <div class="w-full text-center text-2xl text-white mb-0">
        <div id="banner-1-text">
          <BlockContent :blocks="this[`${locale}Banner1Text`]" />
        </div>
        <div class="flex justify-center w-full mt-2">
          <a href="#events" class="text-white text-center bg-pink font-bold p-2 py-1 rounded mt-4">
            {{eventsLinkButtonText[locale]}}
          </a>
        </div>
      </div>
    </div>
    <div class="max-w-6xl m-auto flex flex-wrap px-8 md:px-16 text-xl mb-12 tracking-wide">
      <div class="p-4 w-full lg:w-1/2 lg:flex lg:flex-1">
        <div class="border border-blue text-blue rounded-lg w-full flex justify-center items-start h-full p-8 shadow-blue">
          <BlockContent :blocks="this[`${locale}Block2Text`]" />
        </div>
      </div>
      <div class="p-4 w-full lg:w-1/2 lg:flex lg:flex-1">
        <div class="border border-blue text-blue rounded-lg w-full flex justify-center items-start h-full p-8 shadow-blue">
          <BlockContent :blocks="this[`${locale}Block3Text`]" />
        </div>
      </div>
    </div>

    <div v-for="(block, i) in collaboratorBlocks" :key="block._id"
    class="px-8 md:px-0 md:mb-0">
      <h2 v-if="i === 0" class="text-5xl font-bold italic text-center mb-2 md:mb-0 text-blue uppercase">
        {{collaboratorsSectionTitle[locale]}}
      </h2>
      <div
      class="max-w-4xl m-auto flex flex-col flex-wrap md:flex-no-wrap w-full justify-center mb-4">
        <div class="w-full md:w-1/2 px-4 text-blue"
        :class="i % 2 !== 1 ? collabBlockOddStyle : collabBlockEvenStyle">
          <h3 class="text-3xl mt-4 md:text-5xl mb-0 font-bold"
          :class="i % 2 !== 1 ? 'text-pink' : 'text-aqua'">
            {{block.title[locale]}}
          </h3>
          <div class="text-lg leading-5 flex items-center mb-0">
            <BlockContent :blocks="block[`${locale}Text`]" />
          </div>
        </div>
      </div>
      <Divider v-if="i < collaboratorBlocks.length - 1" class="max-w-5xl m-auto -my-8" />
    </div>

    <!-- <div class="max-w-3xl m-auto flex flex-wrap my-12">
      <div class="w-full mx-4 md:mx-0 md:w-1/3 bg-blue flex items-center rounded-lg tracking-wider">
        <div class="text-white mb-0 leading-tight p-4">
          <BlockContent :blocks="this[`${locale}Block4Text`]" />
        </div>
      </div>
      <div class="w-full md:w-2/3 mx-4 md:mx-0 border border-blue text-blue rounded p-8">
        <p class="p-4 text-lg text-center mb-0">
          <BlockContent :blocks="this[`${locale}Block5Text`]" />
        </p>
        <div class="w-full flex justify-center mb-8">
          <CustomButton :button="block5Button"
          class="p-2 py-1 font-bold italic text-3xl text-white bg-pink rounded-lg tracking-wide" />
        </div>
      </div>
    </div> -->

    <div class="max-w-5xl flex flex-wrap m-auto mb-12">
      <div class="w-full p-2 px-12 bg-blue text-white text-center text-4xl font-bold tracking-wide leading-8">
        {{block6Block7Title[locale]}}
      </div>
      <div class="w-full md:w-1/2 p-4 px-12 lg:px-8 bg-pink text-white leading-5 flex flex-col justify-between">
        <BlockContent :blocks="this[`${locale}Block6Text`]" />
        <!-- <div class="w-full flex justify-center">
          <CustomButton :button="block6Button"
          class="mt-2 mb-2 p-2 py-3 font-bold italic text-2xl text-white bg-aqua rounded-lg tracking-wide text-shadow-pink" />
        </div> -->
      </div>
      <div class="w-full md:w-1/2 p-4 px-12 lg:px-8 bg-aqua text-blue leading-relaxed flex flex-col justify-between">
        <BlockContent :blocks="this[`${locale}Block7Text`]" />
        <!-- <div class="w-full flex justify-center">
          <CustomButton :button="block7Button"
          class="mt-2 mb-2 p-2 py-1 font-bold italic text-2xl text-white bg-blue rounded-lg tracking-wide text-shadow-pink" />
        </div> -->
      </div>
    </div>

    <div id="events" class="w-full bg-blue p-8 px-12 lg:px-8 mb-8 text-white text-center text-2xl tracking-wider">
      <BlockContent :blocks="this[`${locale}Banner2Text`]" />
    </div>

    <!-- <div class="max-w-5xl m-auto">
      <div class="flex flex-wrap px-4 w-full">
        <div v-for="(events, location, i) in formattedEvents" :key="i" class="mb-2 w-full  flex-1">
          <EventsAccordion :location="location" :events="events" />
        </div>
      </div>
    </div> -->

    <div class="max-w-5xl m-auto flex flex-wrap px-12 lg:px-4 mb-6">
      <div v-for="(events, location, i) in formattedEvents" :key="i" class="mb-2 w-full">
        <EventsAccordion :location="location" :events="events" />
      </div>
    </div>

  </div>
</template>

<script>
// import CustomButton from '~/components/blocks/CustomButton'
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import SideShareMenu from '~/components/SideShareMenu'
import getYoutubeId from 'get-youtube-id'
import Hero from '~/components/blocks/Hero'
import Divider from '~/components/blocks/Divider'
import EventsAccordion from '~/components/blocks/EventsAccordion'

const query = groq`
  *[_id == "page-collaborators"][0] {
    events[]->{
      ...
    },
    ...
  }
`

export default {
  components: {
    BlockContent,
    // CustomButton,
    Divider,
    EventsAccordion,
    Hero,
    SideShareMenu
  },
  data() {
    return {
      collabBlockOddStyle: '',
      collabBlockEvenStyle: 'self-end'
    }
  },
  computed: {
    locale() { return this.$i18n.locale },
    formattedEvents() {
      let formattedEvents = {}
      this.events.forEach(event => {
        if (!formattedEvents[event.location]) {
          formattedEvents[event.location] = []
        }
        formattedEvents[event.location].push(event)
      })

      return formattedEvents
    },
    eventLocations() {
      return Object.keys(this.formattedEvents).length
    },
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
  methods: { getYoutubeId }
}
</script>

<style lang="scss" scoped>
.shadow-blue {
  -webkit-box-shadow: 8px 8px 0px -1px #19105e;
  -moz-box-shadow: 8px 8px 0px -1px #19105e;
  box-shadow: 8px 8px 0px -1px #19105e;
}

.shadow-pink-side {
  -webkit-box-shadow: 14px 0px 0px -1px #ea3cad;
  -moz-box-shadow: 14px 0px 0px -1px #ea3cad;
  box-shadow: 14px 0px 0px -1px #ea3cad;
}
.shadow-aqua-side {
  -webkit-box-shadow: 14px 0px 0px -1px #1bcfc9;
  -moz-box-shadow: 14px 0px 0px -1px #1bcfc9;
  box-shadow: 14px 0px 0px -1px #1bcfc9;
}

#block1 strong, #block1 a {
  @apply text-pink;
}

#banner-1-text .font-bold, #banner-1-text .italic {
  @apply text-pink font-bold italic;
}

#banner-1-text a {
  @apply text-pink italic;
}
</style>
