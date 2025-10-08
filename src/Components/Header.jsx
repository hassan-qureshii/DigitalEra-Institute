import React, { useState } from 'react'
import {
  MenuOutlined,
  CloseOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  AppstoreOutlined,
  HomeOutlined
} from '@ant-design/icons'
import { Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo1 from '../assets/Logo1.png'

const Header = () => {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  // Menu items with icons and routes
  const navItems = [
    { key: 'Home', label: 'Home', icon: <HomeOutlined />, path: '/' },
    { key: 'About', label: 'About', icon: <InfoCircleOutlined />, path: '/about' },
    { key: 'Services', label: 'Services', icon: <AppstoreOutlined />, path: '/services' },
    { key: 'Contact', label: 'Contact Us', icon: <PhoneOutlined />, path: '/contact' },
  ]

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-22 bg-[#0C0E15] text-white shadow-md  z-50"
    >
      <div className="flex justify-between items-center h-full px-6 md:px-12">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-36"
        >
          <Link to="/">
            <img
              src={Logo1}
              alt="Logo"
              className="cursor-pointer object-contain mix-blend-normal"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-8 font-bold">
            {navItems.map((item, index) => (
              <motion.li
                key={item.key}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className={`cursor-pointer relative flex items-center gap-2 transition-colors duration-300
                   ${active === item.key ? 'text-[#1578BC]' : 'hover:text-[#1578BC]'}`}
              >
                <Link
                  to={item.path}
                  onClick={() => setActive(item.key)}
                  className="flex items-center gap-2"
                >
                  {item.icon}
                  {item.label}
                </Link>
                <AnimatePresence>
                  {active === item.key && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#1578BC] rounded"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu with Ant Design Dropdown */}
        <div className="md:hidden">
          <Dropdown
            menu={{
              items: navItems.map((item) => ({
                key: item.key,
                label: (
                  <Link
                    to={item.path}
                    onClick={() => {
                      setActive(item.key)
                      setMenuOpen(false)
                    }}
                    className={`flex items-center gap-2 font-bold
                       ${active === item.key ? 'text-[#1578BC]' : 'text-[#000] hover:text-[#1578BC]'}`}
                  >
                    {item.icon} {item.label}
                  </Link>
                ),
              })),
            }}
            placement="bottomRight"
            trigger={['click']}
          >
            <motion.button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#109EF0] text-2xl"
              whileTap={{ rotate: 90, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </motion.button>
          </Dropdown>
        </div>
      </div>
    </motion.div>
  )
}

export default Header