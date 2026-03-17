export default function RoboticsPortfolio() {
  const projects = [
    {
      title: "Trust-Based Companion Robot",
      subtitle: "Master's Thesis Project",
      description:
        "Designed and evaluated a multimodal conversational robot that uses facial and speech-based emotion recognition to study trust, adaptability, and perceived interaction quality in human-robot interaction.",
      tech: ["Human-Robot Interaction", "Emotion Recognition", "Experimental Design", "Data Analysis"],
    },
    {
      title: "Jackal-Based Interactive Robot",
      subtitle: "Perception + HRI System",
      description:
        "Built a companion robot concept on the Jackal platform using Luxonis OAK-D and ReSpeaker Mic Array for multimodal emotion sensing, responsive interaction, and social communication.",
      tech: ["ROS", "Jackal", "OAK-D", "ReSpeaker", "Perception"],
    },
    {
      title: "Multi-Robot Toasting Simulation",
      subtitle: "ROS + Gazebo Coordination",
      description:
        "Developed a Gazebo-based multi-robot workflow where robotic arms coordinate with visual feedback to pick, place, flip, and transfer bread slices during a simulated toasting task.",
      tech: ["ROS", "Gazebo", "Manipulation", "Computer Vision", "Coordination"],
    },
    {
      title: "EKF Localization in ROS 2",
      subtitle: "State Estimation Project",
      description:
        "Implemented Extended Kalman Filter localization grounded in probabilistic robotics principles, with emphasis on efficient prediction-update structure and practical robot state estimation.",
      tech: ["ROS 2", "EKF", "Localization", "C++", "Probabilistic Robotics"],
    },
  ];

  const skills = [
    "ROS/ROS2",
    "Python",
    "C++",
    "MATLAB",
    "Gazebo",
    "MuJoCo",
    "OpenCV",
    "Computer Vision",
    "Perception",
    "Localization",
    "Sensor Fusion",
    "Human-Robot Interaction",
    "CUDA",
    "WSL2"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm tracking-wide text-cyan-300">
                Robotics • Perception • Human-Robot Interaction
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Ninad Alurkar
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Robotics Engineer focused on Perception, Mobile Robots, and Human-Robot Interaction
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
                I build robotics systems using ROS, simulation, localization, computer vision, 
                and multimodal sensing, with a focus on perception-driven autonomy.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 shadow-lg shadow-white/10 transition hover:scale-[1.02]"
                >
                  View Projects
                </a>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-white transition hover:border-slate-500 hover:bg-slate-900"
                >
                  View Resume
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-slate-700 px-5 py-3 font-medium text-white transition hover:border-slate-500 hover:bg-slate-900"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-cyan-950/20">
              <div className="space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Current Focus</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Perception, SLAM, Adaptive Human-Robot Interaction
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Background</p>
                  <p className="mt-2 text-slate-300">
                    Master's graduate with hands-on experience in ROS, simulation, localization,
                    emotion-aware interaction systems, and robotics prototyping.
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Looking For</p>
                  <p className="mt-2 text-slate-300">
                    Robotics, perception, autonomy, machine learning, and human-centered engineering roles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Building practical robotics systems with a human-centered lens
            </h2>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-slate-300 shadow-xl shadow-black/20">
            <p className="leading-8">
              My work sits at the intersection of robotics perception, interaction, and
              autonomy. I am especially interested in systems that sense human state,
              interpret context, and adapt behavior in meaningful ways. My recent work
              includes trust-aware companion robot design, multimodal emotion recognition,
              ROS-based simulation, and state estimation using probabilistic methods.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Selected Work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-slate-700"
            >
              <p className="text-sm font-medium text-cyan-300">{project.subtitle}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl shadow-black/20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Technical Stack
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-2xl border border-slate-700 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Let's connect
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            I am interested in opportunities in robotics, perception, autonomy, and
            human-robot interaction. Reach out to me here!
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="mailto:ninadalurkar4@gmail.com"
              className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 transition hover:border-slate-500"
            >
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-2 font-medium text-white">ninadalurkar4@gmail.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/ninadalurkar"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 transition hover:border-slate-500"
            >
              <p className="text-sm text-slate-400">LinkedIn</p>
              <p className="mt-2 font-medium text-white">linkedin.com/in/ninadalurkar</p>
            </a>
            <a
              href="https://github.com/ninad164"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5 transition hover:border-slate-500"
            >
              <p className="text-sm text-slate-400">GitHub</p>
              <p className="mt-2 font-medium text-white">github.com/ninad164</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
