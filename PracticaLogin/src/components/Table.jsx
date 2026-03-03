export default function Table({ headers = [], data = [] }) {
  return (
    <table className="table">
      <thead>
        <tr>{headers.map(h => <th key={h}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {headers.map(h => (
              <td key={h}>{row[h.toLowerCase()]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}