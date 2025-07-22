import {git, nginx, typescript, rest ,graphql} from '../assets'
import { SkillStatus } from './enum'

export const skills = [
	{
		name: 'Git',
		skill: 5,
		status: SkillStatus.Mastered,
		src: git,
	},
	{
		name: "REST API",
		skill: 5,
		status: SkillStatus.Mastered,
		src: rest,
	},
	{
		name: "GraphQL",
		skill: 2,
		status: SkillStatus.Learning,
		src: graphql,
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
