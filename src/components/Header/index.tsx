import './styles.scss'

import { PhoneIcon } from '@/icons'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__inner'>
        <div className='header__menu'>
          <div className='header__menu-line'></div>
          <div className='header__menu-line'></div>
          <div className='header__menu-line'></div>
        </div>
        <div className='header__callme'>
          <div className='header__callme-title'>Заказать звонок</div>
          <div className='header__callme__wrapper-icon'>
            <PhoneIcon className='header__callme-icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
