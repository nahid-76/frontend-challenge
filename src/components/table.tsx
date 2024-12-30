interface Props<T extends Record<string, string>> {
  data: T[];
  headers: string[];
  mode?: 'dark' | 'light';
}

export const Table = <T extends Record<string, string>>({
  data,
  headers,
  mode='dark',
}: Props<T>) => {

  const headerClass = mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black';
  const rowClass = mode === 'dark' ? 'text-white' : 'text-black';
  const cellClass = mode === 'dark' ? 'bg-gray-600 border-slate-300' : 'bg-white border-gray-300 shadow-md';
  const tableClass = mode === 'dark' ? '' : 'shadow-lg';

  return data.length ? (
    <table className={`border-separate ${tableClass}`}>
      <thead>
        <tr className={headerClass}>
          {headers.map((h, index) => (
            <th key={index} className="p-3 rounded-md">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((d, index) => (
          <tr key={index} className={rowClass}>
            {Object.values(d).map((v, idx) => (
              <td
                key={idx}
                className={`whitespace-break-spaces text-center p-3 rounded-md ${cellClass}`}
              >
                {v}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <span className={`text-center font-bold mt-3 ${rowClass}`}>
      There Is Nothing To Show
    </span>
  );
};