import { FC, useState } from "react";
import { IData_SnippetNews } from "../../types/types";
import { Typography } from 'antd';
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
          rows: 2,
          expandable: 'collapsible',
          expanded,
          onExpand: (_, info) => {
            setExpanded(info.expanded);
            setSymbol(info.expanded ? 'Hide' : 'Show more');
          },
        }}
        aria-label={data.CNTR}
      >
        {highlights.split('<kw>').map((part, i) => {
          if (i === 0) return part;
          const [keyword, rest] = part.split('</kw>');
          return (
            <>
              <span style={{backgroundColor: 'var(--color-blue)', color: 'white', padding: '2px 4px', borderRadius: '4px'}}>{keyword}</span>
              {rest}
            </>
          );
        })}
      </Typography.Paragraph>
    </div>
  );
};
