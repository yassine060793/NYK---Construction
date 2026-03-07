import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'NYK Admin Center',

  // 1. ربط الهوية (من صورتك رقم 1000593061)
  projectId: '95iruxk0', 
  dataset: 'production',

  // 2. ربط النشر (من صورتك رقم 1000593064)
  // ملاحظة: تأكد من وضع هذه الجزئية في ملف sanity.cli.ts إذا كان منفصلاً
  deployment: {
    appId: 'qtkb5fr9700yhmbrhdzbk5qq',
  },

  plugins: [deskTool()],

  // 3. تعريف خانات رفع الصور (Nos Projets) كما طلبت
  schema: {
    types: [
      {
        name: 'project',
        title: 'Nos Projets',
        type: 'document',
        fields: [
          { name: 'title', title: 'Nom du Projet', type: 'string' },
          { 
            name: 'category', 
            title: 'Catégorie', 
            type: 'string', 
            options: { 
              list: [
                {title: 'Cuisine', value: 'Cuisine'},
                {title: 'Salle de Bain', value: 'Salle de Bain'},
                {title: 'Sol', value: 'Sol'},
                {title: 'Façade', value: 'Façade'}
              ] 
            } 
          },
          { name: 'mainImage', title: 'Image', type: 'image', options: { hotspot: true } }, // أضفت hotspot لتتحكم في قص الصورة
          { name: 'description', title: 'Description (Fr)', type: 'text' }
        ]
      }
    ]
  }
})
