import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FILTER_TRANSACTION } from "../../Contants/Enums";
import LocalBarIcon from '@material-ui/icons/LocalBar';


export const FilterIcon=(props)=> {
  const { onChangeHandler, selectedFilter } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filterHandler=(filter)=>{
    onChangeHandler(filter);
    handleClose();
  }

  return (
    <div title="Filter Data">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <LocalBarIcon/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>filterHandler(FILTER_TRANSACTION.ALL)} selected={selectedFilter === FILTER_TRANSACTION.ALL}>Get All Records</MenuItem>
        <MenuItem onClick={()=>filterHandler(FILTER_TRANSACTION.THREE_MONTH)} selected={selectedFilter === FILTER_TRANSACTION.THREE_MONTH}>Get Three Month Records</MenuItem>
        <MenuItem onClick={()=>filterHandler(FILTER_TRANSACTION.PER_MONTH_REWARD)} selected={selectedFilter === FILTER_TRANSACTION.PER_MONTH_REWARD}>Get Per Month Records</MenuItem>
        <MenuItem onClick={()=>filterHandler(FILTER_TRANSACTION.TOTAL_REWARDS)} selected={selectedFilter === FILTER_TRANSACTION.TOTAL_REWARDS}>Get Total Records</MenuItem>

      </Menu>
    </div>
  );
}
