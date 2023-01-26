const categories = [
    {
        id: 1,
        name: 'Coffee',
        description: 'Enjoy our variety of coffee beans',
    },
    {
        id: 2,
        name: 'Tea',
        description: 'Enjoy our great variety of tea to every taste and budget.',
    },
    {
        id: 3,
        name: 'Sweets',
        description: 'Satisfy your sweet tooth with a variety of divinely delicious freshly baked cookies.',
    },
];

export const getCategoryById = (id) => {
    return categories.find((category) => category.id === parseInt(id));
};

export default categories;
