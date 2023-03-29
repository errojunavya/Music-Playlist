import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicListItem,
  TrackInfoContainer,
  MusicTrackImage,
  GenreNameContainer,
  Name,
  Genre,
  DurationAndDeleteContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {musicDetails, onClickDelete} = props
  const {id, imageUrl, name, genre, duration} = musicDetails

  const onDelete = () => {
    onClickDelete(id)
  }

  return (
    <MusicListItem>
      <TrackInfoContainer>
        <MusicTrackImage src={imageUrl} alt="track" />
        <GenreNameContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </GenreNameContainer>
      </TrackInfoContainer>
      <DurationAndDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton type="button" data-testid="delete" onClick={onDelete}>
          <AiOutlineDelete size={20} />
        </DeleteButton>
      </DurationAndDeleteContainer>
    </MusicListItem>
  )
}
export default MusicItem
