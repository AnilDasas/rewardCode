import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


export const UserSelectBox=(props)=> {
  const { onChangeHandler, selectedFilter, userList } = props;
  const [anchorUserEl, setUserAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setUserAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setUserAnchorEl(null);
  };

  const filterHandler=(filter)=>{
    onChangeHandler(filter);
    handleClose();
  }
  return (
    <div title="Filter Data">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      {selectedFilter?.userName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorUserEl}
        keepMounted
        open={Boolean(anchorUserEl)}
        onClose={handleClose}
      >
        {userList.map((user,keyIndex)=>{
            return(
                <MenuItem key={`${user.userId}_${keyIndex}`} onClick={()=>filterHandler(user)} selected={selectedFilter?.userId === user.userId}>{user.userName}</MenuItem>
            )
        })}

      </Menu>
    </div>
  );
}
