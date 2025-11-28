export const API_URL=import.meta.env.VITE_BACKEND_URL;

export const resolveSrc = (img) => {
    if (!img) return '';

    // Full external image → leave it
    if (img.startsWith('http')) return img;

    // Image starting with "/" → append backend URL
    if (img.startsWith('/')) return `${API_URL}${img}`;

    return img;
};