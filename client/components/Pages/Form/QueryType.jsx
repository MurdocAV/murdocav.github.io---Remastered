import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {InfoRounded, PermIdentityRounded, BuildRounded} from '@material-ui/icons'

const StyledMenu = withStyles({
  
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
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
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function QueryType(props) {
  // TODO: Set up a stateful component to handle state for the ptag 'oneHalf'

  const [anchorEl, setAnchorEl] = React.useState(null)
  const [query, setQuery] = React.useState('Select a Query Type')

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className='oneHalf'>
      <p>{query}</p>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Query Type
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <InfoRounded />
          </ListItemIcon>
          <ListItemText onClick={() => setQuery("General Query")}  primary="General Query" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <PermIdentityRounded />
          </ListItemIcon>
          <ListItemText onClick={() => setQuery("Account Management")} primary="Account Management" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <BuildRounded />
          </ListItemIcon>
          <ListItemText onClick={() => setQuery("Technical Support")} primary="Technical Support" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}