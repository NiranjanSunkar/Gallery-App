import './index.css'
const ThumbnailItem = props => {
  const {ImageDetails, setActiveTumbnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = ImageDetails
  const thumbnailclassname = isActive ? 'thumbnail Active' : 'thumbnail'
  const onClickThumbnail = () => {
    setActiveTumbnailId(id)
  }
  return (
    <li className="list-container">
      <button className="btn" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailclassname}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
