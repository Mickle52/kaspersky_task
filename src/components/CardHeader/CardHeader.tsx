import { FC } from "react";
import { IData_SnippetNews } from "../../types/types";
import dayjs from "dayjs";
import './card-header.css'

type Props = { data: IData_SnippetNews }
type HeaderTagItemProps = { icon: string, text: string }

export const CardHeader: FC<Props> = ({data}) => {
  const date = dayjs(data.DP).format('DD MMM YYYY')
  const [day, rest] = [date.slice(0, 2), date.slice(2)]

  return (
    <div className='card-header'>
      <div className="header-info">
        <span className="header-info__date"><span>{day}</span><span className="text-gray">{rest}</span></span>
        <span className="header-info__reach">{Math.round(data.REACH / 1000)}K <span className="text-gray">Reach</span></span>
        <span className="header-info__traffic text-gray">
          Top Traffic:
          {data.TRAFFIC.map(item => (
            <div key={item.value}>
              <span>{item.value}</span>
              <span style={{color: 'white'}}>{`${Math.round(item.count * 100)}%`}</span>
            </div>
          ))}
        </span>
        <div className={`header-info__status ${data.SENT === 'positive' ? '' : 'status-negative'}`}>
          {data.SENT === 'positive' ? 'Positive' : 'Negative'}
        </div>
      </div>
      <h2 className="header-title">{data.TI}</h2>
      <div className="header-tags">
        <HeaderTagItem icon='./icons/domen.svg' text={data.DOM} />
        <HeaderTagItem icon='./icons/flag.svg' text={data.CNTR} />
        <HeaderTagItem icon='./icons/language.svg' text={data.LANG.toUpperCase()} />
        <HeaderTagItem icon='./icons/author.svg' text={data.AU.length ? data.AU.join(', ') : '?'} />
      </div>
    </div>
  );
}

const HeaderTagItem: FC<HeaderTagItemProps> = ({icon, text}) => (
  <div className="header-tags__item">
    <img src={icon} alt='header-tag-icon' width={18} height={18}/>
    {icon.includes('domen') ? 
      <a href={`https://${text}`} target="_blank" rel="noreferrer">{text}</a> : 
      <span>{text}</span>
    }
  </div>
)
