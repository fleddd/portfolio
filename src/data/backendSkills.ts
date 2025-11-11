import { express, firestore, mongodb, nestjs, nodejs, postgreSQL } from '../assets'

import { SkillStatus } from './enum'

export const skills = [
	{
		name: 'Node.JS',
		skill: 4,
		status: SkillStatus.Learning,
		src: nodejs,
		invertInDark: false
	},
	{
		name: 'Express',
		skill: 4,
		status: SkillStatus.Learning,
		src: express,
		invertInDark: true
	},
	{
		name: 'Nest',
		skill: 4,
		status: SkillStatus.Learning,
		src: nestjs,
		invertInDark: false
	},
	{
		name: 'MongoDB',
		skill: 3,
		status: SkillStatus.Learning,
		src: mongodb,
		invertInDark: false
	},
	{
		name: 'Firestore',
		skill: 3,
		status: SkillStatus.Learning,
		src: firestore,
		invertInDark: false
	},
	{
		name: 'PostgreSQL',
		skill: 3,
		status: SkillStatus.Learning,
		src: postgreSQL,
		invertInDark: false
	},
]
