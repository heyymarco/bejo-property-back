export default {
    name: 'product',
    title: 'Produk',
    type: 'document',

    fields: [
        {
            name: 'title',
            title: 'Judul',
            type: 'string',

            validation: Rule => Rule.required().error('harus diisi'),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },

            validation: Rule => Rule.required().error('harus diisi'),
        },
        {
            name: 'mainImage',
            title: 'Gambar utama',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'gallery',
            title: 'Galeri',
            type: 'array',
            of: [{ type: 'image' }],
        },
        {
            name: 'categories',
            title: 'Kategori',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        },
        {
            name: 'location',
            title: 'Lokasi',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Harga',
            type: 'number',

            validation: Rule => Rule.required().error('harus diisi'),
        },
        {
            name: 'landArea',
            title: 'Luas tanah',
            type: 'number',

            validation: Rule => Rule.min(0).error('minimal 0'),
        },
        {
            name: 'buildingArea',
            title: 'Luas Bangunan',
            type: 'number',

            validation: Rule => [
                Rule.min(0).error('minimal 0'),
                Rule.precision(0).error('tidak boleh pecahan'),
            ],
        },
        {
            name: 'bedrooms',
            title: 'Jml kamar tidur',
            type: 'number',

            validation: Rule => [
                Rule.min(0).error('minimal 0'),
                Rule.precision(0).error('tidak boleh pecahan'),
            ],
        },
        {
            name: 'sittingrooms',
            title: 'Jml kamar tamu',
            type: 'number',

            validation: Rule => [
                Rule.min(0).error('minimal 0'),
                Rule.precision(0).error('tidak boleh pecahan'),
            ],
        },
        {
            name: 'bathrooms',
            title: 'Jml kamar Mandi',
            type: 'number',

            validation: Rule => [
                Rule.min(0).error('minimal 0'),
                Rule.precision(0).error('tidak boleh pecahan'),
            ],
        },
        {
            name: 'kitchens',
            title: 'Jml dapur',
            type: 'number',

            validation: Rule => [
                Rule.min(0).error('minimal 0'),
                Rule.precision(0).error('tidak boleh pecahan'),
            ],
        },
        {
            name: 'carport',
            title: 'Jml garasi mobil',
            type: 'number',

            validation: Rule => [
                Rule.min(0).error('minimal 0'),
                Rule.precision(0).error('tidak boleh pecahan'),
            ],
        },
        {
            name: 'electricalPower',
            title: 'Daya listrik',
            type: 'number',

            // list: [900, 1300, 2200, 3500, 5500, 6600],
            // layout: 'dropdown',

            validation: Rule => [
                Rule.min(0).error('minimal 0'),
                Rule.precision(0).error('tidak boleh pecahan'),
            ],
        },
        {
            name: 'certificates',
            title: 'Sertifikat',
            type: 'array',
            of: [{
                type: 'string',

                // list: ['SHM', 'IMB'],
                // layout: 'dropdown',
            }],
        },
        {
            name: 'content',
            title: 'Keterangan',
            type: 'blockContent',
        },
        {
            name: 'publishedAt',
            title: 'Tanggal posting',
            type: 'datetime',
        },
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        // prepare(selection) {
        //     const { author } = selection
        //     return Object.assign({}, selection, {
        //         subtitle: author && `by ${author}`,
        //     })
        // },
    },
}
