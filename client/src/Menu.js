import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks'

const MenuPopupState = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
  return (
    <div>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Dorms
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={popupState.close}>Tolbert Hall</MenuItem>
        <MenuItem onClick={popupState.close}>Yulee Hall</MenuItem>
      </Menu>
    </div>
  )
}

export default MenuPopupState