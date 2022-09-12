import { css } from '@emotion/css';

type Data = {
  id: number;
  text: String;
  image: String;
};

export interface IAnimeCardProps {
  /**
   * Set Wether status is loading idle or success nor error
   */
  data?: Array<Data>;
  detail?: Data;
  onClick?: () => void;
}

export const AnimeCard: React.FC<IAnimeCardProps> = ({ data, onClick }) => {
  return (
    <div onClick={() => typeof (onClick) === 'function' && onClick()}>
      click me
    </div>
  );
};
AnimeCard.displayName = 'Anime/AnimeCard'