import {express, firestore, mongodb, nestjs, nodejs} from '../assets'

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
		skill: 0,
		status: SkillStatus.Planning,
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
]
