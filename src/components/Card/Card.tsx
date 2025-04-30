import { IData_SnippetNews } from '../../types/types'
import { FC } from 'react'
import './card.css'
import {CardHeader} from '../CardHeader/CardHeader'
import {CardContent} from '../CardContent/CardContent'
type Props = {
  data: IData_SnippetNews
}

export const Card: FC<Props> = ({data}) => {
  return (
    <div className='card-container'>
      <CardHeader data={data} />
      <CardContent data={data} />
    </div>
  );
}
