import React, { useEffect, useRef } from "react";
import { skills } from "../data";

const Skills: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-fadeIn");
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	// Group skills by category
	const technicalSkills = skills.filter((skill) => skill.category === "technical");
	const softSkills = skills.filter((skill) => skill.category === "soft");

	return (
		<section id="skills" ref={sectionRef} className="py-20 bg-white opacity-0">
			<div className="container mx-auto px-4 md:px-6">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
					<div className="w-20 h-1 bg-blue-600 mx-auto"></div>
				</div>

				<div className="max-w-6xl mx-auto">
					<div className="mb-12">
						<h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>

						<div className="mb-8">
							<h4 className="text-xl font-semibold text-blue-600 mb-4">Programming & Frameworks</h4>
							<div className="flex flex-wrap gap-3">
								{technicalSkills
									.filter((skill) => ["Python", "JavaScript/TypeScript", "C#", "C++", "Angular", "Node.js", "AWS Lambda", "Docker"].includes(skill.name))
									.map((skill) => (
										<span key={skill.id} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300">
											{skill.name}
										</span>
									))}
							</div>
						</div>

						<div className="mb-8">
							<h4 className="text-xl font-semibold text-blue-600 mb-4">Machine Learning & AI</h4>
							<div className="flex flex-wrap gap-3">
								{technicalSkills
									.filter((skill) =>
										["Machine Learning", "SK Learn", "Pandas", "Numpy", "Tensorflow", "PyTorch", "Keras", "Linear Regression", "Logistic Regression", "Decision Tree", "Boosting", "KNN", "K-mean clustering", "Naive Bayes"].includes(
											skill.name
										)
									)
									.map((skill) => (
										<span key={skill.id} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300">
											{skill.name}
										</span>
									))}
							</div>
						</div>

						<div>
							<h4 className="text-xl font-semibold text-blue-600 mb-4">Cloud & DevOps</h4>
							<div className="flex flex-wrap gap-3">
								{technicalSkills
									.filter((skill) => ["Serverless & Cloud", "AWS Lambda", "Docker", "Software Development"].includes(skill.name))
									.map((skill) => (
										<span key={skill.id} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300">
											{skill.name}
										</span>
									))}
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-2xl font-bold text-gray-800 mb-6">Soft Skills</h3>
						<div className="flex flex-wrap gap-3">
							{softSkills.map((skill) => (
								<span key={skill.id} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors duration-300">
									{skill.name}
								</span>
							))}
						</div>
					</div>

					<div className="mt-16 bg-gray-50 rounded-lg p-8 shadow-inner">
						<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Technical Proficiency</h3>

						<div className="space-y-6">
							<div>
								<div className="flex justify-between mb-2">
									<span className="text-gray-700 font-medium">JavaScript/TypeScript</span>
									<span className="text-blue-600 font-medium">95%</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2.5">
									<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "95%" }}></div>
								</div>
							</div>
							<div>
								<div className="flex justify-between mb-2">
									<span className="text-gray-700 font-medium">Machine Learning & AI</span>
									<span className="text-blue-600 font-medium">80%</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2.5">
									<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
								</div>
							</div>

							<div>
								<div className="flex justify-between mb-2">
									<span className="text-gray-700 font-medium">Python Development</span>
									<span className="text-blue-600 font-medium">90%</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2.5">
									<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "90%" }}></div>
								</div>
							</div>

							<div>
								<div className="flex justify-between mb-2">
									<span className="text-gray-700 font-medium">AWS Serverless</span>
									<span className="text-blue-600 font-medium">85%</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2.5">
									<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
								</div>
							</div>

							<div>
								<div className="flex justify-between mb-2">
									<span className="text-gray-700 font-medium">Docker & Containerization</span>
									<span className="text-blue-600 font-medium">85%</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2.5">
									<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
