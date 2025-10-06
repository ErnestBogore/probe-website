/**
 * Reusable component for rendering DatoCMS Structured Text.
 */
import { StructuredText, renderNodeRule } from 'react-datocms/structured-text';
import { isHeading, isParagraph, isLink, isList, isListItem } from 'datocms-structured-text-utils';
import Image from 'next/image';
import { Table } from './blocks/Table';
import { Takeaway } from './blocks/Takeaway';

// Custom render rules for standard nodes
const customNodeRules = [
  renderNodeRule(isParagraph, ({ children, key }) => (
    <p key={key} className="mb-4 leading-relaxed">
      {children}
    </p>
  )),
  renderNodeRule(isLink, ({ node, children, key }) => (
    <a
      key={key}
      href={node.url}
      target={node.meta?.find((meta) => meta.id === 'target')?.value}
      rel={node.url.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="text-blue-600 hover:underline"
    >
      {children}
    </a>
  )),
  renderNodeRule(isList, ({ node, children, key }) => {
    const listClasses = "my-4 ml-6 space-y-2";
    if (node.style === 'bulleted') {
      return <ul key={key} className={`${listClasses} list-disc list-outside`}>{children}</ul>;
    }
    return <ol key={key} className={`${listClasses} list-decimal list-outside`}>{children}</ol>;
  }),
  renderNodeRule(isListItem, ({ children, key }) => (
    <li key={key} className="pl-2">{children}</li>
  ))
];

// Main renderer component
export function StructuredTextRenderer({ data, customNodeRules: customRulesProp }: { data: any, customNodeRules?: any[] }) {
  if (!data) return null;

  return (
    <StructuredText
      data={data}
      customNodeRules={customRulesProp || customNodeRules}
      renderBlock={({ record }: any) => {
        switch (record.__typename) {
          case 'ImageBlockRecord':
            return (
              <div className="my-6">
                <Image
                  src={record.image.url}
                  alt={record.image.alt || 'Block image'}
                  width={record.image.width}
                  height={record.image.height}
                  className="rounded-lg max-w-full h-auto shadow-md"
                />
              </div>
            );
          case 'TableRecord':
            const columns = record.headers.split(',').map((h: string) => h.trim());
            const tableData = {
              columns,
              data: record.rows.split('\n').filter((r: string) => r.trim() !== '').map((row: string) => {
                const values = row.split(',').map((v: string) => v.trim());
                const rowObj: Record<string, string> = {};
                columns.forEach((col: string, i: number) => {
                  rowObj[col] = values[i] || '';
                });
                return rowObj;
              })
            };
            return (
              <div>
                {record.title && <h3 className="text-xl font-semibold mb-4">{record.title}</h3>}
                <Table data={tableData} />
              </div>
            );
          case 'TakeawayRecord':
            return (
              <Takeaway title={record.title}>
                {record.content}
              </Takeaway>
            );
          default:
            return null;
        }
      }}
    />
  );
}
