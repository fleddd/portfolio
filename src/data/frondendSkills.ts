import css from '../assets/css.svg'
import html from '../assets/html.svg'
import js from '../assets/javascript.svg'
import next from '../assets/next-js.svg'
import react from '../assets/react.svg'
import sass from '../assets/sass.svg'
import tailwind from '../assets/tailwind.svg'

import { SkillStatus } from './enum'

export const skills = [
	{
		name: 'HTML5',
		src: html,
		skill: 5,
		status: SkillStatus.Mastered,
	},
	{
		name: 'CSS3',
		src: css,
		skill: 5,
		status: SkillStatus.Mastered,
	},
	{
		name: 'JS',
		src: js,
		skill: 5,
		status: SkillStatus.Mastered,
	},
	{
		name: 'React',
		src: react,
		skill: 5,
		status: SkillStatus.Mastered,
	},

	{
		name: 'TailwindCSS',
		src: tailwind,
		skill: 5,
		status: SkillStatus.Mastered,
	},
	{
		name: 'SASS',
		src: sass,
		skill: 4,
		status: SkillStatus.Mastered,
	},
	{
		name: 'Next',
		src: next,
		skill: 0,
		status: SkillStatus.Planning,
	},
]
