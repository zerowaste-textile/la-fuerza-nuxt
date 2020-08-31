export default {
  name: 'page-collaborators',
  type: 'document',
  title: 'Page: Collaborators',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Title'
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Hero'
    },
    {
      name: 'videoUrl',
      type: 'string',
      title: 'Video Url'
    },
    {
      name: 'enBlock1Text',
      type: 'bodyPortableText',
      title: 'Block 1 Text [English]'
    },
    {
      name: 'esBlock1Text',
      type: 'bodyPortableText',
      title: 'Block 1 Text [Spanish]'
    },
    {
      name: 'banner1Text',
      type: 'localeString',
      title: 'Banner 1 Text'
    },
    {
      name: 'banner1LinkText',
      type: 'localeString',
      title: 'Banner 1 Link Text'
    },
    {
      name: 'enBlock2Text',
      type: 'bodyPortableText',
      title: 'Block 2 Text [English]'
    },
    {
      name: 'esBlock2Text',
      type: 'bodyPortableText',
      title: 'Block 2 Text [Spanish]'
    },
    {
      name: 'enBlock3Text',
      type: 'bodyPortableText',
      title: 'Block 3 Text [English]'
    },
    {
      name: 'esBlock3Text',
      type: 'bodyPortableText',
      title: 'Block 3 Text [Spanish]'
    },
    {
      name: 'collaboratorsSectionTitle',
      type: 'localeString',
      title: 'How To Collaborate Section Title'
    },
    {
      name: 'collaboratorBlocks',
      type: 'array',
      of: [{ type: 'collaboratorBlock' }]
    },
    {
      name: 'block4Text',
      type: 'localeString',
      title: 'Block 4 Text'
    },
    {
      name: 'enBlock5Text',
      type: 'bodyPortableText',
      title: 'Block 5 Text [English]'
    },
    {
      name: 'esBlock5Text',
      type: 'bodyPortableText',
      title: 'Block 5 Text [Spanish]'
    },
    {
      name: 'block5ButtonText',
      type: 'localeString',
      title: 'Block 5 Button Text'
    },
    {
      name: 'enBlock6Text',
      type: 'bodyPortableText',
      title: 'Block 6 Text [English]'
    },
    {
      name: 'esBlock6Text',
      type: 'bodyPortableText',
      title: 'Block 6 Text [Spanish]'
    },
    {
      name: 'block6ButtonText',
      type: 'localeString',
      title: 'Block 6 Button Text'
    },
    {
      name: 'enBlock7Text',
      type: 'bodyPortableText',
      title: 'Block 7 Text [English]'
    },
    {
      name: 'esBlock7Text',
      type: 'bodyPortableText',
      title: 'Block 7 Text [Spanish]'
    },
    {
      name: 'block7ButtonText',
      type: 'localeString',
      title: 'Block 7 Button Text'
    },
    {
      name: 'banner2Text',
      type: 'localeString',
      title: 'Banner 2 Text'
    },
    {
      name: 'events',
      type: 'array',
      description: 'Events',
      of: [{
        type: 'reference',
        to: [{ type: 'event' }]
      }]
    }
  ],
  preview: {
    prepare: () => ({ title: 'Page: Collaborators' })
  }
}
