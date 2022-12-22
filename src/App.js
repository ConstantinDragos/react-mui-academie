import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Snackbar,
  Tooltip,
} from '@mui/material';
import { createUseStyles } from 'react-jss';

import React, { useState } from 'react';

const useStyles = createUseStyles({
  buttonAlbastru: {
    backgroundColor: 'blue',
    color: 'red',
    marginBottom: '100px',
  },
  buttonRosu: {
    backgroundColor: 'red',
    color: 'blue',
  },
  buttonDialog: {
    margin: '50px',
  },
});

const App = () => {
  // const classes = createUseStyles({
  //   buttonAlbastru: {
  //     backgroundColor: 'blue',
  //     color: 'red',
  //     marginBottom: '100px',
  //   },
  //   buttonRosu: {
  //     backgroundColor: 'red',
  //     color: 'blue',
  //   },
  // })();
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const handleClickUndo = () => {
    console.log('undo');
  };

  return (
    <div>
      {/* <Tooltip title='salut' placement='top' style={{ marginRight: '10px' }}>
        <Button className={classes.buttonAlbastru}>Button</Button>
      </Tooltip>
      <Tooltip title='salut' placement='top'>
        <Button className={classes.buttonRosu}>Button</Button>
      </Tooltip>
      <IconButton>
        <DisplaySettingsIcon color='success' />
      </IconButton> */}
      {/* <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
        <Box>
          <Button
            variant='outlined'
            onClick={handleClose}
            className={classes.buttonDialog}
          >
            Close
          </Button>

          <Button
            variant='contained'
            onClick={handleClose}
            className={classes.buttonDialog}
          >
            Accept
          </Button>
        </Box>
      </Dialog> */}

      <List>
        <ListItemButton>
          <ListItemText primary='Inbox' />
        </ListItemButton>
        <Divider
          style={{
            backgroundColor: 'red',
          }}
        />
        <ListItemButton divider>
          <ListItemText primary='Drafts' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Trash' />
        </ListItemButton>
        <Divider
          light
          style={{
            backgroundColor: 'green',
          }}
        />
        <ListItemButton>
          <ListItemText primary='Spam' />
        </ListItemButton>
      </List>
    </div>
  );
};

export default App;
