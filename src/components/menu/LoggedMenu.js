import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import MenuItem from 'material-ui/MenuItem'
import PatientsIcon from 'material-ui/svg-icons/action/assignment-ind'
import { BottomNavigationItem } from 'material-ui/BottomNavigation'

// components
import Link from '../../containers/routing/Link'
// styles
import styles from './menu.scss'

const LoggedMenu = (props) => {
  const { dispatchLogout, ...rest } = props
  const handleLogOut = () => {
    dispatchLogout()
  }

  return (
    <div className={styles.menuItems}>
      <Link path="/">
        <BottomNavigationItem
          label="Profile"
          icon={<PatientsIcon className={styles.itemIcon} />}
          className={styles.item}
        />
      </Link>
      <IconMenu
        {...rest}
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem onClick={handleLogOut} primaryText="Salir" />
      </IconMenu>
    </div>
  )
}

LoggedMenu.propTypes = {
  dispatchLogout: React.PropTypes.func.isRequired,
}

LoggedMenu.muiName = 'IconMenu'

export default LoggedMenu
