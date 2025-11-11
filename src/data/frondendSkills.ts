import { css, html, javascript, nextJs, react, sass, tailwind } from '../assets'

import { SkillStatus } from './enum'

export const skills = [
	{
		name: 'HTML5',
		src: html,
		skill: 5,
		status: SkillStatus.Mastered,
		invertInDark: false
	},
	{
		name: 'CSS3',
		src: css,
		skill: 5,
		status: SkillStatus.Mastered,
		invertInDark: false
	},
	{
		name: 'JS',
		src: javascript,
		skill: 5,
		status: SkillStatus.Mastered,
		invertInDark: false
	},
	{
		name: 'React',
		src: react,
		skill: 5,
		status: SkillStatus.Mastered,
		invertInDark: false
	},
	{
		name: 'Next',
		src: nextJs,
		skill: 3,
		status: SkillStatus.Learning,
		invertInDark: true
	},

	{
		name: 'TailwindCSS',
		src: tailwind,
		skill: 5,
		status: SkillStatus.Mastered,
		invertInDark: false
	},
	{
		name: 'SASS',
		src: sass,
		skill: 4,
		status: SkillStatus.Mastered,
		invertInDark: false
	},
]
