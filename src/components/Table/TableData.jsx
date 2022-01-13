import { tableData } from "../Table/tableData";
import Row from "..//Table/Row.jsx";
const TableWords = () => {
  return tableData.map(cell => <Row key={cell.id} {...cell} />);
};

export default TableWords;
