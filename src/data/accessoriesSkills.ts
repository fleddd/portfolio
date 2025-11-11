import { git, nginx, typescript, rest, graphql, docker } from '../assets'
import { SkillStatus } from './enum'

export const skills = [
	{
		name: 'Git',
		skill: 5,
		status: SkillStatus.Mastered,
		src: git,
		invertInDark: false
	},
	{
		name: "REST API",
		skill: 5,
		status: SkillStatus.Mastered,
		src: rest,
		invertInDark: true
	},
	{
		name: "GraphQL",
		skill: 2,
		status: SkillStatus.Learning,
		src: graphql,
		invertInDark: false
	},
	{
		name: 'Nginx',
		skill: 3,
		status: SkillStatus.Learning,
		src: nginx,
		invertInDark: false
	},
	{
		name: 'Docker',
		skill: 3,
		status: SkillStatus.Learning,
		src: docker,
		invertInDark: false
	},
	{
		name: 'TypeScript',
		skill: 5,
		status: SkillStatus.Mastered,
		src: typescript,
		invertInDark: false
	},
]
