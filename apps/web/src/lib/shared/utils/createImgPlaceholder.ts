export default function createImgPlaceholder(
  seed: string,
  height: number,
  width: number
): string {
  return `https://picsum.photos/seed/${seed}/${height}/${width}`
}
