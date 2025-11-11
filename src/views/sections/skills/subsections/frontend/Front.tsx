import { SkillCard } from "../../../../../components/ui/cards";
import { StatusIcon } from "../../../../../components/ui/images";
import { skills } from "../../../../../data/frondendSkills";

const Front = () => {
	return (
		<div>
			<div className="text-center text-xl font-bold">Front-end</div>
			<div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<div className="m-10 flex flex-col items-start justify-center gap-2">
					<div className="flex gap-1">
						<StatusIcon size={15} status={0} />
						<span className="text-sm">Mastered</span>
					</div>
					<div className="flex gap-1">
						<StatusIcon size={15} status={1} />
						<span className="text-sm">Learning...</span>
					</div>
					<div className="flex gap-1">
						<StatusIcon size={15} status={2} />
						<span className="text-sm">Planning...</span>
					</div>
				</div>
				{skills.map((skill) => (
					<SkillCard
						status={skill.status}
						name={skill.name}
						image={skill.src}
						skill={skill.skill}
						invertInDark={skill.invertInDark}
					/>
				))}
			</div>
		</div>
	);
};

export default Front;
