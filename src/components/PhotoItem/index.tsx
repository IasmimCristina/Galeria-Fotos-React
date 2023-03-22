import * as Item from './styles';

type Props = {
  url: string;
  name: string;
}

export const PhotoItem = ({url, name}: Props) => {
  return (
    <Item.Container>
      <img src={url} alt={name} />    
    <span>{name}</span>
    </Item.Container>
  );
}