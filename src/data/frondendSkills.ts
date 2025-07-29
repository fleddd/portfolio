import { css, html, javascript, nextJs, react, sass, tailwind } from '../assets'

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
		src: javascript,
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
		name: 'Next',
		src: nextJs,
		skill: 3,
		status: SkillStatus.Learning,
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
]
