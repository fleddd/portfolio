import git from '../assets/git.svg'
import nginx from '../assets/nginx.svg'
import typescript from '../assets/typescript.svg'
import { SkillStatus } from './enum'

export const skills = [
	{
		name: 'Git',
		skill: 5,
		status: SkillStatus.Mastered,
		src: git,
	},
	{
		name: 'Nginx',
		skill: 3,
		status: SkillStatus.Learning,
		src: nginx,
	},
	{
		name: 'TypeScript',
		skill: 5,
		status: SkillStatus.Mastered,
		src: typescript,
	},
]
