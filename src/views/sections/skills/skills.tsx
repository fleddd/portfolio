import Back from "./subsections/backend/back";
import Front from "./subsections/frontend/Front";
import Accessories from "./subsections/shared/accesories";

const Skills = () => {
	return (
		<section
			id="skills"
			className=" min-h-dvh flex items-center gap-10 justify-center flex-col"
		>
			<h3 className="text-center text-2xl sm:text-4xl flex items-center gap-5">
				My stack
			</h3>
			<div className="flex justify-center items-center gap-14 flex-col">
				<Front />
				<Back />
				<Accessories />
			</div>
		</section>
	);
};

export default Skills;
