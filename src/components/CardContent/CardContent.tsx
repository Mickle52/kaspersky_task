import { FC, useState } from "react";
import { IData_SnippetNews } from "../../types/types";
import { Tag, Typography } from 'antd';
import './card-content.css';
type Props = {
  data: IData_SnippetNews
}

export const CardContent: FC<Props> = ({data}) => {
  const [symbol, setSymbol] = useState('Show more');
  const [expanded, setExpanded] = useState(false);
  const highlights = data.HIGHLIGHTS.map(highlight => highlight.slice(1)).join('; ');

  return (
    <div className="card-content">
      <Typography.Paragraph
        className="card-content__text"
        ellipsis={{
          symbol: symbol,
          rows: 3,
          expandable: 'collapsible',
          expanded,
          onExpand: (_, info) => {
            setExpanded(info.expanded);
            setSymbol(info.expanded ? 'Hide' : 'Show more');
          },
        }}
      >
        {highlights.split('<kw>').map((part, i) => {
          if (i === 0) return part;
          const [keyword, rest] = part.split('</kw>');
          return (
            <>
              <span className="highlight-border">{keyword}</span>
              {rest}
            </>
          );
        })}
      </Typography.Paragraph>
      <div className="content-tags">
        {data.KW.map((item, index) => (
          <Tag key={index} className="content-tags__item">{item.value} <span style={{color: 'white'}}>{item.count}</span></Tag>
        ))}
      </div>
      <a href={data.URL} target="_blank" rel="noreferrer"><button className="card-content__button">Original Source</button></a>
    </div>
  );
};
