import express from '../assets/express.svg'
import firestore from '../assets/firestore.svg'
import mongodb from '../assets/mongodb.svg'
import nestjs from '../assets/nestjs.svg'
import nodejs from '../assets/nodejs.svg'
import { SkillStatus } from './enum'

export const skills = [
	{
		name: 'Node.JS',
		skill: 3,
		status: SkillStatus.Learning,
		src: nodejs,
	},
	{
		name: 'Express',
		skill: 2,
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
