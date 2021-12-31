export default {
    name: 'category',
    title: 'Kategori',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'judul',
            type: 'string',
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
