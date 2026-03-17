import { SpeedInsights } from '@vercel/speed-insights/react';

export default function RoboticsPortfolio() {
  const projects = [
    {
      title: "Measuring Trust in Human–Robot Interaction",
      subtitle: "Master’s Thesis Project",
      description:
        "Built a multimodal companion robot, capable of recognising human emotions(voice and face), using ROS on Clearpath JACKAL with OAK-D Pro and ReSpeaker. Conducted IRB-approved study (60 participants) analyzing trust using statistical metrics.",
      tech: ["ROS", "JACKAL", "OAK-D", "ReSpeaker", "HRI"],
      link: "https://github.com/ninad164/buddy-emotion-recognition"
    },
    {
      title: "RL–Based Navigation Controller in MuJoCo Simulation",
      subtitle: "Autonomous Navigation",
      description:
        "Developed a mobile-robot autonomy environment in MuJoCo and trained a PPO controller, improving task success from 28% to 71% compared to baseline rule-based controller. Reduced time-to-goal by 62% (8.7s → 3.3s) vs rule-based baseline.",
      tech: ["MuJoCo Sim", "RL(PPO)"],
      link: "https://github.com/ninad164/mujoco-rl-navigation",
    },
    {
      title: "Sensor Guard – ROS2 Safety Monitoring System",
      subtitle: "ROS2 + Real-Time Monitoring",
      description:
        "Developed a ROS2-based safety monitoring system for real-time sensor validation and anomaly detection. Designed node-based architecture for monitoring sensor health and triggering alerts for abnormal conditions.",
      tech: ["ROS2", "Sensor Monitoring", "C++"],
      link: "https://github.com/ninad164/sensor-guard-ros2",
    },
    {
      title: "Autonomous Manipulation of a robotic arm for toasting bread",
      subtitle: "Perception + Planning",
      description:
        "Designed a perception–planning–control pipeline using OpenCV in ROS/Gazebo, reducing manual task time by 7 minutes.",
      tech: ["ROS1", "Gazebo", "OpenCV", "MoveIt"],
    },
    {
      title: "ML-Based Ridge Regression (L2) Strategy",
      subtitle: "Time-Series Prediction",
      description:
        "Designed a rolling-window Ridge Regression pipeline that reduced out-of-sample error by 15% and improved robustness under covariate shift.",
      tech: ["Python", "Machine Learning", "L2 Regularization"],
      link: "https://github.com/ninad164/quant-global-momentum"
    },
    {
      title: "Temporal Prediction: LSTM vs Transformer",
      subtitle: "Deep Learning",
      description:
        "Built GPU-accelerated forecasting pipelines in PyTorch and TensorFlow, benchmarking models using RMSE and MAE across varying volatility regimes.",
      tech: ["PyTorch", "TensorFlow", "LSTM", "Transformer"],
      link: "https://github.com/ninad164/Stock-prediction"
    },
  ];

  const skills = [
    "ROS/ROS2",
    "Python",
    "PyTorch",
    "TensorFlow",
    "C++",
    "MATLAB",
    "Gazebo",
    "MuJoCo",
    "OpenCV",
    "MoveIt",
    "Perception",
    "SLAM",
    "Sensor Fusion",
    "CUDA",
    "Reinforcement Learning"
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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-cyan-300 hover:underline"
                >
                  View Project →
                </a>
              )}
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
      <SpeedInsights />
    </div>
  );
}
