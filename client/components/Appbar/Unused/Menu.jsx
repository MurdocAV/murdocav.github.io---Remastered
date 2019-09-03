import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'

export default function CenteredMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => console.log('clicked')} onMouseOver={handleClick}>
          <Link className="noDecoration appBarTitle" to={'/'} key={'Home'} replace={true}>
              Murdoc_AV
          </Link>
        </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleClose}>Theme: Original</MenuItem>
        <MenuItem onClick={handleClose}>Theme: Vaporwave</MenuItem>
      </Menu>
    </div>
  );
}