import styles from "../../styles/dashboard.module.css";

const Table = ({ headers, data }) => {
  return (
    <table
      className={` ${styles.tableStyle}`}
      id={styles.dashboard}
    >
      <thead>
        <tr className={styles.trStyle}>
          {headers.map((header, index) => (
            <th className={styles.thStyle} key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={styles.tdStyle}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
