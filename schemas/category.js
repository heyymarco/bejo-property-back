export default {
    name: 'category',
    title: 'Kategori',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'judul',
            type: 'string',

            validation: Rule => Rule.required().error('harus diisi'),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 20,
            },

            validation: Rule => Rule.required().error('harus diisi'),
        },
        {
            name: 'description',
            title: 'Keterangan',
            type: 'text',
        },
        {
            name: 'main',
            title: 'Kategori utama',
            type: 'boolean',
        },
    ],
}
