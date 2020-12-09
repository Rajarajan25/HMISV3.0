import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import classNames from 'classnames'
import store from 'store'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { find } from 'lodash'
import style from './style.module.scss'

const mapStateToProps = ({ menu, settings, user }) => ({
  menuData: menu.menuData,
  isMenuCollapsed: settings.isMenuCollapsed,
  isMobileView: settings.isMobileView,
  isMenuUnfixed: settings.isMenuUnfixed,
  isMenuShadow: settings.isMenuShadow,
  leftMenuWidth: settings.leftMenuWidth,
  LeftMenuPaddingLeft: settings.LeftMenuPaddingLeft,
  menuColor: settings.menuColor,
  logo: settings.logo,
  role: user.role,
})

const MenuLeft = ({
  dispatch,
  menuData = [],
  location: { pathname },

  isMenuCollapsed,
  isMobileView,
  isMenuUnfixed,
  isMenuShadow,
  leftMenuWidth,
  leftMenuPaddingLeft,
  menuColor,
  logo,
  role,
}) => {
  const [selectedKeys, setSelectedKeys] = useState(store.get('app.menu.selectedKeys') || [])
  const [openedKeys, setOpenedKeys] = useState(store.get('app.menu.openedKeys') || [])

  useEffect(() => {
    applySelectedKeys()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, menuData])

  const applySelectedKeys = () => {
    const flattenItems = (items, key) =>
      items.reduce((flattenedItems, item) => {
        flattenedItems.push(item)
        if (Array.isArray(item[key])) {
          return flattenedItems.concat(flattenItems(item[key], key))
        }
        return flattenedItems
      }, [])
    const selectedItem = find(flattenItems(menuData, 'children'), ['url', pathname])
    setSelectedKeys(selectedItem ? [selectedItem.key] : [])
  }

  const onCollapse = (value, type) => {
    if (type === 'responsive' && isMenuCollapsed) {
      return
    }
    dispatch({
      type: 'settings/CHANGE_SETTING',
      payload: {
        setting: 'isMenuCollapsed',
        value: !isMenuCollapsed,
      },
    })
    setOpenedKeys([])
  }

  const onOpenChange = keys => {
    store.set('app.menu.openedKeys', keys)
    setOpenedKeys(keys)
  }

  const handleClick = e => {
    store.set('app.menu.selectedKeys', [e.key])
    setSelectedKeys([e.key])
  }

  const generateMenuItems = () => {
    const generateItem = item => {
      const { key, title, url, icon, disabled, count } = item
      if (item.category) {
        return <Menu.ItemGroup key={Math.random()} title={item.title} />
      }
      if (item.url) {
        return (
          <Menu.Item key={key} disabled={disabled}>
            {item.target && (
              <a href={url} target={item.target} rel="noopener noreferrer">
                <span className={style.title}>{title}</span>
                {count && <span className="badge badge-success ml-2">{count}</span>}
                {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
              </a>
            )}
            {!item.target && (
              <Link to={url}>
                <span className={style.title}>{title}</span>
                {count && <span className="badge badge-success ml-2">{count}</span>}
                {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
              </Link>
            )}
          </Menu.Item>
        )
      }
      return (
        <Menu.Item key={key} disabled={disabled}>
          <span className={style.title}>{title}</span>
          {count && <span className="badge badge-success ml-2">{count}</span>}
          {icon && <span className={`${icon} ${style.icon} icon-collapsed-hidden`} />}
        </Menu.Item>
      )
    }

    const generateSubmenu = items =>
      items.map(menuItem => {
        if (menuItem.children) {
          const subMenuTitle = (
            <span key={menuItem.key}>
              <span className={style.title}>{menuItem.title}</span>
              {menuItem.count && <span className="badge badge-success ml-2">{menuItem.count}</span>}
              {menuItem.icon && <span className={`${menuItem.icon} ${style.icon}`} />}
            </span>
          )
          return (
            <Menu.SubMenu title={subMenuTitle} key={menuItem.key}>
              {generateSubmenu(menuItem.children)}
            </Menu.SubMenu>
          )
        }
        return generateItem(menuItem)
      })

    return menuData.map(menuItem => {
      if (menuItem.roles && !menuItem.roles.includes(role)) {
        return null
      }
      if (menuItem.children) {
        const subMenuTitle = (
          <span key={menuItem.key}>
            <span className={style.title}>{menuItem.title}</span>
            {menuItem.count && <span className="badge badge-success ml-2">{menuItem.count}</span>}
            {menuItem.icon && <span className={`${menuItem.icon} ${style.icon}`} />}
          </span>
        )
        return (
          <Menu.SubMenu title={subMenuTitle} key={menuItem.key}>
            {generateSubmenu(menuItem.children)}
          </Menu.SubMenu>
        )
      }
      return generateItem(menuItem)
    })
  }

  const menuSettings = isMobileView
    ? {
        width: leftMenuWidth,
        paddingLeft: leftMenuPaddingLeft,
        collapsible: false,
        collapsed: false,
        onCollapse,
      }
    : {
        width: leftMenuWidth,
        paddingLeft: leftMenuPaddingLeft,
        collapsible: true,
        collapsed: isMenuCollapsed,
        onCollapse,
        breakpoint: 'lg',
      }

  return (

   
  
    <Layout.Sider
      {...menuSettings}
      className={classNames(`${style.menu}`, {
        [style.white]: menuColor === 'white',
        [style.gray]: menuColor === 'gray',
        [style.dark]: menuColor === 'dark',
        [style.unfixed]: isMenuUnfixed,
        [style.shadow]: isMenuShadow,
      })}
    >  
    <div className="d-flex costomLeftmenuouter">
    <div className="fixedLeftmenu">
      <div className="cui__menuLeft__logo__container p-0">
        <div className="cui__menuLeft__logo CustomLogo">
          <svg xmlns="http://www.w3.org/2000/svg" width="430.386" height={349} viewBox="0 0 430.386 349">
            <g id="Group_1361" data-name="Group 1361" transform="translate(16895.193 10094)">
              <rect id="Rectangle_180" data-name="Rectangle 180" width={61} height={303} rx="30.5" transform="translate(-16539 -10072)" fill="#fed157" />
              <rect id="Rectangle_177" data-name="Rectangle 177" width={61} height={349} rx="30.5" transform="translate(-16781 -10094)" fill="#fed157" />
              <rect id="Rectangle_179" data-name="Rectangle 179" width={61} height={349} rx="30.5" transform="translate(-16642 -10094)" fill="#9983fc" />
              <rect id="Rectangle_175" data-name="Rectangle 175" width={61} height={303} rx="30.5" transform="translate(-16882 -10072)" fill="#9983fc" />
              <rect id="Rectangle_176" data-name="Rectangle 176" width={61} height={303} rx="30.5" transform="translate(-16895.193 -10043.06) rotate(-45)" fill="#fd76c0" />
              <rect id="Rectangle_178" data-name="Rectangle 178" width={61} height={303} rx="30.5" transform="translate(-16679.061 -9827.807) rotate(-135)" fill="#62e7cb" />
              <path id="Intersection_1" data-name="Intersection 1" d="M183.193,44.194a30.889,30.889,0,0,1,8.326-21.14l1.322-1.326.17-.169a31,31,0,0,1,52.182,22.635v5.455a30.966,30.966,0,0,1-8.511,16.04l-53.489,53.637Z" transform="translate(-16722.193 -10086.693)" fill="#feb92a" />
              <path id="Intersection_2" data-name="Intersection 2" d="M80.194,142.865l61-61v86.267l-61,61Z" transform="translate(-16722.193 -10094)" fill="#48d4e4" />
              <path id="Intersection_3" data-name="Intersection 3" d="M114.194,165.135V78.867l61,61v86.267Z" transform="translate(-16895.193 -10094)" fill="#fd5e5e" />
              <path id="Intersection_4" data-name="Intersection 4" d="M21.7,65.68a30.973,30.973,0,0,1-8.511-16.04V45.194a31,31,0,1,1,62,0v74.133Z" transform="translate(-16896.193 -10088.193)" fill="#fd52b0" />
            </g>
          </svg>           
        </div>
        <ul className="nav flex-column customLeftmenu">
          <li className="nav-item">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <svg viewBox="0 0 18 18" id="homeIcon" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.293.293a1 1 0 011.414 0l8 8a1 1 0 01-1.414 1.414L16 9.414V16a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3a1 1 0 10-2 0v3a1 1 0 01-1 1H3a1 1 0 01-1-1V9.414l-.293.293A1 1 0 01.293 8.293l2-2 6-6zM4 7.414V15h2v-2a3 3 0 116 0v2h2V7.414l-5-5-5 5z" />
              </svg>                 
            </a>
          </li>
          <li className="nav-item">
            <a className="cui__menuLeft__item__link cui__menuLeft__item--active" href="dashboards-alpha.html">
              <svg viewBox="0 0 18 18" id="taskIcon" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4 1a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V4a3 3 0 00-3-3H4zm0 2a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1H4z" />
                <path d="M4.293 10.707a1 1 0 011.414-1.414l1.294 1.294 5.294-5.294a1 1 0 011.414 1.414L7.746 12.67a.997.997 0 01-.745.332.997.997 0 01-.745-.332l-1.963-1.963z" />
              </svg>                 
            </a>
          </li>
          <li className="nav-item">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <svg viewBox="0 0 18 18" id="notificationIcon" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" fill="#282c34" clipRule="evenodd" d="M9 0a1 1 0 00-1 1v1c0 .028.001.055.003.082A6.002 6.002 0 003 8v2.846l-.948 2.834a.999.999 0 00-.052.319V14a1 1 0 001 1h3a3 3 0 106 0h3a1 1 0 00.951-1.32L15 10.837V8a6.002 6.002 0 00-5.003-5.918C9.999 2.055 10 2.028 10 2V1a1 1 0 00-1-1zm4 11V8a4 4 0 00-8 0v2.92a.997.997 0 01-.049.398L4.388 13h9.227l-.563-1.682a1.003 1.003 0 01-.052-.319zm-4 5a1 1 0 01-1-1h2a1 1 0 01-1 1z" />
              </svg>                
            </a>
          </li>
        </ul>
      </div>
      <div className="cui__menuLeft__scroll kit__customScroll">
        <ul className="nav flex-column customLeftmenu">
          <li className="nav-item d-none">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <svg xmlns="http://www.w3.org/2000/svg" width="25.155" height="23.223" viewBox="0 0 25.155 23.223">
                <g id="noun_Home_2522584" transform="translate(0.691 0.65)">
                  <g id="Group_1296" data-name="Group 1296" transform="translate(0.019)">
                    <path id="Path_447" data-name="Path 447" d="M1.334,12.423c-.658.658-1.681-.365-1.023-1.1C4.038,7.673,7.765,3.946,11.492.219a.706.706,0,0,1,1.023,0C16.242,3.946,19.9,7.673,23.622,11.327c.658.731-.365,1.754-1.023,1.1L20.7,10.45v8.915a2.605,2.605,0,0,1-2.631,2.558H16.461A2.589,2.589,0,0,1,13.9,19.365v-4.6H10.03v4.6a2.589,2.589,0,0,1-2.558,2.558H5.865a2.589,2.589,0,0,1-2.558-2.558V10.45Zm17.9-3.435L12,1.754,4.769,8.988V19.365a1.124,1.124,0,0,0,1.1,1.1H7.472a1.124,1.124,0,0,0,1.1-1.1V14.031A.732.732,0,0,1,9.3,13.3h5.335a.732.732,0,0,1,.731.731v5.335a1.124,1.124,0,0,0,1.1,1.1h1.608a1.14,1.14,0,0,0,1.169-1.1Z" transform="translate(-0.099)" fill="#292d34" stroke="#292d34" strokeWidth="1.3" />
                  </g>
                </g>
              </svg>                  
            </a>
          </li>
          <li className="nav-item d-none">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 21 21">
                <g id="Group_1314" data-name="Group 1314" transform="translate(22617 12293)">
                  <g id="Rectangle_156" data-name="Rectangle 156" transform="translate(-22617 -12293)" fill="none" stroke="#282c34" strokeWidth={1}>
                    <rect width={21} height={21} rx={3} stroke="none" />
                    <rect x="0.5" y="0.5" width={20} height={20} rx="2.5" fill="none" />
                  </g>
                  <path id="Path_445" data-name="Path 445" d="M-22522.812-13497.5l3.432,3.716,8.383-8.447" transform="translate(-90 1216)" fill="none" stroke="#282c34" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" />
                </g>
              </svg>                  
            </a>
          </li>
          <li className="nav-item d-none">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <svg xmlns="http://www.w3.org/2000/svg" width="21.601" height="23.79" viewBox="0 0 21.601 23.79">
                <g id="noun_notification_1594291" transform="translate(0.85 0.85)">
                  <g id="Group_311" data-name="Group 311" transform="translate(0 0)">
                    <g id="Group_310" data-name="Group 310" transform="translate(0 0)">
                      <path id="Path_272" data-name="Path 272" d="M38.129,41.355a3.184,3.184,0,0,1-6.356,0H25.8a.8.8,0,0,1-.8-.795v-1.2a1.992,1.992,0,0,1,1.991-1.99.4.4,0,0,0,.4-.4V32.2a7.564,7.564,0,0,1,5.373-7.24v-.52a2.189,2.189,0,1,1,4.378,0v.52a7.565,7.565,0,0,1,5.373,7.24v4.776a.4.4,0,0,0,.4.4,1.993,1.993,0,0,1,1.991,1.99v1.2a.8.8,0,0,1-.8.795Zm-.8,0h-4.76a2.388,2.388,0,0,0,4.76,0Zm6.774-.8s0-1.194,0-1.194a1.2,1.2,0,0,0-1.195-1.194,1.192,1.192,0,0,1-1.193-1.195V32.2a6.768,6.768,0,0,0-5.074-6.553l-.3-.077V24.439a1.393,1.393,0,1,0-2.786,0V25.57l-.3.077A6.767,6.767,0,0,0,28.184,32.2v4.776a1.2,1.2,0,0,1-1.193,1.195A1.2,1.2,0,0,0,25.8,39.365v1.194Z" transform="translate(-25 -22.25)" fill="#292d34" stroke="#292d34" strokeWidth="1.7" />
                    </g>
                  </g>
                </g>
              </svg>                  
            </a>
          </li>
          <li className="nav-item">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <svg viewBox="0 0 18 18" id="svg-sprite-cu2-dashboards" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 0a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V2a2 2 0 00-2-2H3zm0 2h4v6H3V2zm9 16a2 2 0 01-2-2v-6a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2h-4zm0-2h4v-6h-4v6zM1 13a2 2 0 012-2h4a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2v-3zm6 0H3v3h4v-3zm5-6a2 2 0 01-2-2V2a2 2 0 012-2h4a2 2 0 012 2v3a2 2 0 01-2 2h-4zm0-2h4V2h-4v3z" stroke="transparent" />
              </svg>
            </a>
          </li>
          <li className="nav-item d-none">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">                  
              <img src="../../components/side-menu-icon/Appointment.svg" alt="Appointment" />
            </a>
          </li>
          <li className="nav-item d-none">
            <a className="cui__menuLeft__item__link  cui__menuLeft__item--active" href="available-doctors.html">
              <img className="defaultIMG" src="../../components/side-menu-icon/Doctor.svg" alt="Doctor" /> 
              <img className="activeIMG" src="../../components/side-menu-icon/Doctor-w.svg" alt="Doctor" /> 
            </a>
          </li>
          <li className="nav-item d-none">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <img src="../../components/side-menu-icon/Patient.svg" alt="Patient" /> 
            </a>
          </li>
        </ul>
      </div>
      <div className="w-100 bottomLeftmenu">
        <ul className="nav flex-column customLeftmenu ">
          <li className="nav-item">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html"> 
              <svg viewBox="0 0 18 18" id="svg-sprite-cu2-docs" xmlns="http://www.w3.org/2000/svg"><path d="M5 11a1 1 0 011-1h6a1 1 0 110 2H6a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z" /><path fillRule="evenodd" clipRule="evenodd" d="M4.5 0A2.5 2.5 0 002 2.5v13A2.5 2.5 0 004.5 18h9a2.5 2.5 0 002.5-2.5V6.414A2 2 0 0015.414 5L11 .586A2 2 0 009.586 0H4.5zM4 2.5a.5.5 0 01.5-.5H9v2.5A2.5 2.5 0 0011.5 7H14v8.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-13zM12.586 5L11 3.414V4.5a.5.5 0 00.5.5h1.086z" /></svg>
            </a>
          </li>
          <li className="nav-item">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <svg viewBox="0 0 18 18" id="svg-sprite-cu2-live-view" xmlns="http://www.w3.org/2000/svg"><path d="M14.659 3.265a.946.946 0 00-1.314 0 .946.946 0 000 1.314 6.117 6.117 0 011.802 4.345 6.12 6.12 0 01-1.802 4.346.946.946 0 000 1.313.92.92 0 00.657.27.917.917 0 00.657-.27A7.925 7.925 0 0017 8.941c0-2.156-.825-4.16-2.341-5.676zM2.853 8.924c0-1.65.64-3.183 1.802-4.345a.946.946 0 000-1.314.946.946 0 00-1.314 0A7.935 7.935 0 001 8.925c0 2.121.859 4.176 2.358 5.658.185.185.42.27.657.27a.917.917 0 00.657-.27.93.93 0 00-.017-1.313 6.129 6.129 0 01-1.802-4.346z" /><path d="M12.335 5.606a.93.93 0 00-1.33 1.297c.538.54.841 1.263.841 2.021s-.303 1.482-.842 2.021a.93.93 0 00.017 1.314c.185.185.421.27.657.27a.917.917 0 00.657-.27 4.675 4.675 0 001.38-3.335 4.665 4.665 0 00-1.38-3.318zM6.979 5.59a.946.946 0 00-1.314 0 4.703 4.703 0 00-1.38 3.334c0 1.263.488 2.442 1.38 3.335a.92.92 0 00.657.27.917.917 0 00.657-.27.946.946 0 000-1.314 2.856 2.856 0 01-.842-2.02c0-.759.303-1.483.842-2.022a.915.915 0 000-1.314zM9 10.339a1.415 1.415 0 100-2.83 1.415 1.415 0 000 2.83z" /></svg>
            </a>
          </li>
          <li className="nav-item">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <svg viewBox="0 0 18 18" id="svg-sprite-cu2-trophy-2" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 1.75A.75.75 0 014.75 1h8.5a.75.75 0 01.75.75V3h3a1 1 0 011 1v1a5 5 0 01-4.4 4.964A5.009 5.009 0 0110 12.9V15h2a1 1 0 110 2H6a1 1 0 110-2h2v-2.1a5.009 5.009 0 01-3.6-2.936A5 5 0 010 5V4a1 1 0 011-1h3V1.75zM6 3v5a3 3 0 006 0V3H6zm8 2v2.83A3.001 3.001 0 0016 5h-2zM4 7.83V5H2c0 1.306.835 2.417 2 2.83z" /></svg>
            </a>
          </li>
          <li className="nav-item d-none">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <img src="../../components/side-menu-icon/Chat.svg" alt="Chat" />  
            </a>
          </li>
          <li className="nav-item">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <svg viewBox="0 0 11 17" id="svg-sprite-question4" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M.754 2.445C1.5 1.29 2.795.5 5.086.5c2.292 0 3.624.883 4.332 1.945.397.595.636 1.34.668 2.055.05 1.122-.3 2.067-.839 2.751-.511.65-1.176 1.03-1.67 1.308l-.034.019c-.53.298-.853.48-1.09.742-.19.209-.367.523-.367 1.18a1 1 0 11-2 0c0-1.093.324-1.904.884-2.523.466-.514 1.066-.848 1.51-1.096l.116-.065c.506-.285.84-.498 1.08-.802.21-.268.409-.692.41-1.504a1.81 1.81 0 00-.039-.262 2.067 2.067 0 00-.293-.693C7.462 3.117 6.795 2.5 5.086 2.5c-1.708 0-2.376.617-2.668 1.055a2.067 2.067 0 00-.332.956v.001a1 1 0 01-2-.012v-.03A2.102 2.102 0 01.1 4.276C.109 4.16.13 4 .173 3.814c.082-.37.266-.88.581-1.369z" />
                <path d="M5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </a>
          </li>
          <li className="nav-item leftmenuMoreoption">
            <a className="cui__menuLeft__item__link" href="dashboards-alpha.html">
              <svg viewBox="0 0 16 4" id="svg-sprite-cu2-ellipsis" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4zm6 0a2 2 0 110-4 2 2 0 010 4z" fillRule="evenodd" />
              </svg>
            </a>
          </li>
          <li className="nav-item d-none">
            <a className="cui__menuLeft__item__link leftmenuProfileicon" data-toggle="modal" data-target="#leftmenuUserprofile">
              <span className="backProfile bg-red">S</span>
              <span className="frontProfile bg-blue">S</span>
            </a>
          </li>
        </ul>
        <a className="leftmenuProfileicon" data-toggle="modal" data-target="#leftmenuUserprofile">
          <span className="backProfile bg-blue">S</span>
          <span className="frontProfile bg-pink">S</span>
        </a>
      </div>
    </div>
  </div>
      
   
   <div
        className={style.menuOuter}
        style={{
          width: isMenuCollapsed && !isMobileView ? 80 : 353,
          height: isMobileView || isMenuUnfixed ? 'calc(100% - 64px)' : 'calc(100% - 110px)',
          paddingLeft: 55
        }}
      >
        {/* <div className={style.logoContainer}>
          <div className={style.logo}>
            <img src="resources/images/logo.svg" className="mr-2" alt="Clean UI" />
            <div className={style.name}>{logo}</div>
            {logo === 'Clean UI Pro' && <div className={style.descr}>React</div>}
          </div>
        </div> */}
        <PerfectScrollbar>
          <Menu
            onClick={handleClick}
            selectedKeys={selectedKeys}
            openKeys={openedKeys}
            onOpenChange={onOpenChange}
            mode="inline"
            className={style.navigation}
            inlineIndent="15"
          >
            {generateMenuItems()}
          </Menu>
        
        </PerfectScrollbar>
      </div>
    </Layout.Sider>
    
  )
}

export default withRouter(connect(mapStateToProps)(MenuLeft))
