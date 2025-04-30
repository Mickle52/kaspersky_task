import { FC, useState } from "react";
import { IData_SnippetNews } from "../../types/types";
import { Tag, Typography } from 'antd';
import './card-content.css';

export const CardContent: FC<{data: IData_SnippetNews}> = ({data}) => {
  const [expanded, setExpanded] = useState(false);
  const highlights = data.HIGHLIGHTS.map(h => h.slice(1)).join('; ');

  return (
    <div className="card-content">
      <Typography.Paragraph
        className="card-content__text"
        ellipsis={{
          symbol: expanded ? 'Hide' : 'Show more',
          rows: 3,
          expandable: 'collapsible',
          expanded,
          onExpand: (_, info) => setExpanded(info.expanded),
        }}
      >
        {highlights.split('<kw>').map((part, i) => 
          i === 0 ? part : (
            <>
              <span className="highlight-border">{part.split('</kw>')[0]}</span>
              {part.split('</kw>')[1]}
            </>
          )
        )}
      </Typography.Paragraph>
      <div className="content-tags">
        {data.KW.map((item, i) => (
          <Tag key={i} className="content-tags__item">
            {item.value} <span style={{color: 'white'}}>{item.count}</span>
          </Tag>
        ))}
      </div>
      <a href={data.URL} target="_blank" rel="noreferrer">
        <button className="card-content__button">Original Source</button>
      </a>
      <p style={{color: 'white', fontSize: '12px', textAlign: 'center'}}>*my email: mickle.simakov@gmail.com</p>
    </div>
  );
};
