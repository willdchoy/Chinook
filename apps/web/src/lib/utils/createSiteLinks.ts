export default function createSiteLinks(cardItem: unknown) {
  return {
    trackLink: `/artist/${cardItem.artist.name}`
      .replace(/ /g, "-")
      .replace(/\./g, ""),
    albumLink: `/artist/${cardItem.artist.name}`
      .replace(/ /g, "-")
      .replace(/\./g, ""),
    discussLink: `/artist/${cardItem.artist.name}/discuss`
      .replace(/ /g, "-")
      .replace(/\./g, "")
  }
}
