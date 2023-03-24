import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { getTableColumns } from "../../Utility/Utility";
import {useStyles} from "./style"


export const TransactionRecord = (props) => {
  const { transactionList, filter, fetchUserData } = props;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event,newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
const transactioncolumns=getTableColumns(filter);
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {transactioncolumns.map(
                // eslint-disable-next-line
                (column, columnIndex) => {
                  if (column.isVisible) {
                    return (
                      <TableCell
                        style={{ minWidth: 170 }}
                        key={`${columnIndex}_${column.name}`}
                      >
                        {column.name}
                      </TableCell>
                    );
                  }
                }
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionList
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((transaction, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={index}>
                     {transaction?.userId &&<TableCell className={classes.link} onClick={()=>fetchUserData(transaction.userId)} key={`${transaction.userId}_${index}`}>
                      {transaction.userId}
                    </TableCell>}
                    {transactioncolumns[1]?.isVisible &&<TableCell key={`${transaction.price}_${index}`}>
                      {transaction.price}
                    </TableCell>}
                    <TableCell key={`${transaction.rewards}_${index}`}>
                      {transaction.rewards}
                    </TableCell>
                    <TableCell key={`${transaction.transactionDate}_${index}`}>
                      {new Date(transaction?.transactionDate)?.toDateString()}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={transactionList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
