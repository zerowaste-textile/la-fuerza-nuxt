export default {
  name: 'translation-workshops',
  title: 'Page: Workshops',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'value',
      title: 'Value',
      type: 'localeString'
    },
    {
      name: 'key',
      title: 'System Key',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'description',
      subtitle: 'value.en'
    }
  }
}
