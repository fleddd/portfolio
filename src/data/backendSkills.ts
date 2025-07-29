import { express, firestore, mongodb, nestjs, nodejs, postgreSQL } from '../assets'

import { SkillStatus } from './enum'

export const skills = [
	{
		name: 'Node.JS',
		skill: 4,
		status: SkillStatus.Learning,
		src: nodejs,
	},
	{
		name: 'Express',
		skill: 4,
		status: SkillStatus.Learning,
		src: express,
	},
	{
		name: 'NestJS',
		skill: 3,
		status: SkillStatus.Learning,
		src: nestjs,
	},
	{
		name: 'MongoDB',
		skill: 3,
		status: SkillStatus.Learning,
		src: mongodb,
	},
	{
		name: 'Firestore',
		skill: 3,
		status: SkillStatus.Learning,
		src: firestore,
	},
	{
		name: 'PostgreSQL',
		skill: 3,
		status: SkillStatus.Learning,
		src: postgreSQL,
	},
]
