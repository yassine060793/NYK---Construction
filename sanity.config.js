export default {
  name: 'default',
  title: 'NYK Admin Center',
  projectId: '95iruxk0', // تم وضع الـ ID الخاص بك هنا
  dataset: 'production',
  schema: {
    types: [
      {
        name: 'project',
        title: 'Nos Projets',
        type: 'document',
        fields: [
          { name: 'title', title: 'Nom du Projet', type: 'string' },
          { name: 'category', title: 'Catégorie', type: 'string', options: { list: ['Cuisine', 'Salle de Bain', 'Sol', 'Façade'] } },
          { name: 'mainImage', title: 'Image', type: 'image' },
          { name: 'description', title: 'Description (Fr)', type: 'text' }
        ]
      }
    ]
  }
}

