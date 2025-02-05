const images = import.meta.glob('./assets/*.png');
async function getImage(name: string): Promise<string> {
    const imagePath = `./assets/${name}.png`;
    if (images[imagePath]) {
        const mod = await images[imagePath]() as { default: string };
        return mod.default;
    } else {
        throw new Error(`image ${name} doesnt exist`);
    }
}
export default getImage;