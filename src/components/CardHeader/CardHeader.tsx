import { FC } from "react";
import { IData_SnippetNews } from "../../types/types";
import dayjs from "dayjs";
import './card-header.css'

type Props = {
  data: IData_SnippetNews
}

type HeaderTagItemProps = {
  icon: string
  text: string
}

export const CardHeader: FC<Props> = ({data}) => {
  const date = dayjs(data.DP).format('DD MMM YYYY')

  return (
    <div className='card-header'>
      <div className="header-info">
        <span className="header-info__date"><span>{date.slice(0, 2)}</span><span className="text-gray">{date.slice(2)}</span></span>
        <span className="header-info__reach">{Math.round(data.REACH / 1000)}K <span className="text-gray">Reach</span></span>
        <span className="header-info__traffic text-gray">
          Top Traffic:
          {data.TRAFFIC.map((item) => {
            return (
              <div key={item.value}>
                <span>{item.value}</span>
                <span style={{color: 'white'}}>{`${Math.round(item.count * 100 / 1)}%`}</span>
              </div>
            )
          })}
        </span>
        {data.SENT === 'positive' ? <div className="header-info__status">Positive</div> : <div className="header-info__status status-negative">Negative</div>}
      </div>
      <h2 className="header-title">{data.TI}</h2>
      <div className="header-tags">
        <HeaderTagItem icon={'/icons/domen.svg'} text={data.DOM} />
        <HeaderTagItem icon={'/icons/flag.svg'} text={data.CNTR} />
        <HeaderTagItem icon={'/icons/language.svg'} text={data.LANG.toUpperCase()} />
        {data.AU.length > 0 ? <HeaderTagItem icon={'/icons/author.svg'} text={data.AU.join(', ')} /> : <HeaderTagItem icon={'/icons/author.svg'} text={'?'} />}
      </div>
    </div>
  );
}

const HeaderTagItem: FC<HeaderTagItemProps> = ({icon, text}) => {
  return (
    <div className="header-tags__item">
      <img src={icon} alt={'header-tag-icon'} width={18} height={18}/>
      {icon.includes('domen') ? <a href={`https://${text}`} target="_blank" rel="noreferrer">{text}</a> : <span>{text}</span>}
    </div>
  )
}
