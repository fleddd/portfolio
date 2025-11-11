import { SkillCard } from "../../../../../components/ui/cards";
import { skills } from "../../../../../data/accessoriesSkills";
const Accessories = () => {
	return (
		<div>
			<div className="text-center text-xl font-bold">Accessories</div>
			<div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

export default Accessories;
