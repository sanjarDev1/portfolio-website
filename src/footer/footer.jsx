import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
function Footer() {
  return (
    <div className='footer'>
        <p>© Sanjarbek`s portfolio 2022 - { new Date().getFullYear()} | Made with <FavoriteIcon/> </p>
    </div>
  )
}

export default Footer