import MovieIcon from 'react-icons/lib/md/local-movies'

export default {
  type: 'document',
  icon: MovieIcon,
  name: 'video',
  title: 'Video',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'creator',
      title: 'Creator',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'Youtube Url',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { value: 'videos', title: 'Videos' },
          { value: 'talleres', title: 'Talleres' },
          { value: 'librosEnEspanol', title: 'Libros en Español' }
        ]
      }
    },
    {
      name: 'subCategory',
      type: 'string',
      title: 'Sub Category',
      options: {
        list: [
          { value: 'familiasLatinas', title: 'Familias Latinas: Juntas en Casa' },
          { value: 'momentosDeConexion', title: 'Momentos de Conexión' },
          { value: 'laFuerzaDeCreer', title: 'La Fuerza de Creer' },
          { value: 'meetTheCharacters', title: 'Meet the Characters' },
          { value: 'tallersEnAccion', title: 'Talleres en Acción' },
          { value: 'tallersDigitales', title: 'Talleres Digitales' },
          { value: 'librosEnEspanolVideos', title: 'Libros en Español Videos' }
        ]
      }
    },
    {
      name: 'relatedVideos',
      type: 'array',
      title: 'Related Videos',
      description: 'Videos to display in the "Related Videos" section',
      of: [
        {
          name: 'video',
          type: 'videoReference',
          title: 'Video'
        }
      ]
    },
    {
      name: 'length',
      title: 'Length (in minutes)',
      type: 'number'
    },
    {
      name: 'shortDescription',
      type: 'localeString',
      title: 'Short Description',
      validation: Rule => Rule.custom(text => {
        if (text && text.en && text.en.length && text.es && text.es.length) {
          return true
        }
        return 'English and Spanish translations required.'
      })
    },
    {
      name: 'descriptionEnglish',
      type: 'bodyPortableText',
      title: 'Long description: English'
    },
    {
      name: 'descriptionSpanish',
      type: 'bodyPortableText',
      title: 'Long description: Spanish'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.error('You must add a slug.').required()
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: '🎬'
    }
  }
}
