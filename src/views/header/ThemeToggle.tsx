import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ThemeToggerIcon } from '../../components/ui/images'

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState<boolean>(() =>
        typeof document !== 'undefined'
            ? document.documentElement.classList.contains('dark')
            : false
    )

    const toggleDarkMode = () => {
        const newTheme = !isDark
        setIsDark(newTheme)

        const root = document.documentElement
        if (newTheme) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark')
            setIsDark(true)
        }
    }, [])

    return (
        <motion.button
            initial={{ color: 'var(--text-color)' }}
            animate={{ color: 'var(--text-color)' }}
            whileHover={{ color: '#036fff' }}
            className="font-normal sm:text-base cursor-pointer"
            type='button'
            aria-label='Toggle theme'
            onClick={toggleDarkMode}
        >
            <ThemeToggerIcon size={30} />
        </motion.button>
    )
}

export default ThemeToggle
