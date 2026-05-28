export default function RoboticsPortfolio() {
  const experiences = [
    {
      role: "Robotics Software Engineer",
      company: "Boston Dynamics",
      duration: "Sep 2025 - Present | United States",
      summary:
        "Building autonomy and robotics software for real-time locomotion, state estimation, planning, and perception on production robotic systems.",
      bullets: [
        "Developed real-time quadruped locomotion control systems in ROS 2 and C++, improving control-loop determinism and reducing runtime jitter.",
        "Built multi-sensor state estimation pipelines fusing IMU, force-torque, and stereo vision data with EKF and factor graph optimization.",
        "Implemented motion planning and trajectory optimization systems with OMPL and MPC-based controllers for autonomous navigation.",
        "Created terrain segmentation and obstacle detection pipelines using OpenCV, PyTorch, and real-time robotics inference workflows.",
        "Developed simulation-to-real validation workflows in Gazebo and Isaac Sim to harden autonomy behavior before deployment.",
        "Integrated ROS 2 lifecycle nodes, BT.CPP behavior trees, and modular autonomy services for reliable robotic system orchestration.",
      ],
      tech: [
        "ROS 2",
        "C++",
        "EKF",
        "MPC",
        "OMPL",
        "OpenCV",
        "PyTorch",
        "Isaac Sim",
        "Gazebo",
        "Docker",
        "TensorRT",
        "BT.CPP",
      ],
    },
    {
      role: "Robotics Software Engineer",
      company: "Honeywell",
      duration: "Jan 2021 - Jul 2024 | India",
      summary:
        "Delivered autonomy infrastructure for industrial robotics with an emphasis on navigation, estimation, simulation, and deployable perception pipelines.",
      bullets: [
        "Architected ROS 2-based autonomous navigation systems for industrial robotics using DDS middleware and modular software design.",
        "Developed multi-modal SLAM and localization pipelines integrating LiDAR, stereo vision, and IMU data with EKF and graph optimization.",
        "Built CI/CD robotics testing workflows with Docker, GitLab CI, and Gazebo-based simulation infrastructure.",
        "Implemented real-time sensor fusion and state estimation systems for long-duration autonomous robotic operations.",
        "Optimized embedded AI perception pipelines with CUDA, TensorRT, and PyTorch acceleration for production-style inference.",
        "Developed motion planning systems with MoveIt, OMPL, and ROS 2 Control for constrained robotic environments.",
      ],
      tech: [
        "ROS 2",
        "SLAM",
        "EKF",
        "MoveIt",
        "OMPL",
        "CUDA",
        "TensorRT",
        "Gazebo",
        "Docker",
        "GitLab CI",
        "Python",
        "C++",
      ],
    },
  ];

  const projects = [
    {
      title: "Measuring Trust in Human–Robot Interaction",
      subtitle: "Master’s Thesis Project",
      description:
        "Built a multimodal companion robot, capable of recognising human emotions(voice and face), using ROS on Clearpath JACKAL with OAK-D Pro and ReSpeaker. Conducted IRB-approved study (60 participants) analyzing trust using statistical metrics.",
      tech: ["ROS", "JACKAL", "OAK-D", "ReSpeaker", "HRI"],
      link: "https://github.com/ninad164/buddy-emotion-recognition",
      thesisPdf: "/thesis.pdf"
    },
    {
      title: "MuJoCo PPO Navigation Controller",
      subtitle: "Reinforcement Learning for Obstacle-Aware Autonomous Navigation",
      description:
        "Built a custom MuJoCo/Gymnasium mobile-robot navigation environment with LiDAR-style ray observations, trained a PPO policy using Stable-Baselines3, and benchmarked it against a reactive baseline controller across success rate, collision rate, and time-to-goal metrics.",
      tech: ["MuJoCo", "Reinforcement Learning", "PPO", "Gymnasium", "Stable-Baselines3", "Python", "Autonomous Navigation"],
      link: "https://github.com/ninad164/mujoco-rl-navigation",
      thumbnail: "/project-images/mujoco-rl-navigation-thumbnail.jpg",
      previewVideo: "/project-images/mujoco-rl-baseline-vs-ppo.mp4",
      demoLink: "/project-images/mujoco-rl-baseline-vs-ppo.mp4",
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
      title: "ROS2 PCL Perception Suite",
      subtitle: "Real-Time Point Cloud Perception Pipeline using ROS 2 and PCL",
      description:
        "Built a modular ROS 2 Humble pipeline with a synthetic PointCloud2 publisher, preprocessing, ground segmentation, Euclidean clustering, RViz2 bounding boxes, centroid tracking, persistent IDs, metrics logging, YAML configuration, and unified launch.",
      tech: ["ROS 2 Humble", "C++", "Python", "PCL", "RViz2", "Ubuntu 22.04"],
      link: "https://github.com/ninad164/ros2-pcl-perception-suite",
      thumbnail: "/projects/ros2-pcl-perception-suite-thumbnail.png",
      preview: "/projects/ros2-pcl-perception-suite-preview.gif",
      metricsImage: "/projects/ros2-pcl-perception-suite-metrics.png",
    },
    {
      title: "ROS 2 EKF Localization System",
      subtitle: "Extended Kalman Filter State Estimation for Mobile Robots",
      description:
        "Implemented EKF-based localization from scratch in C++ for real-time sensor fusion between wheel odometry and simulated noisy GPS, publishing a filtered `/ekf/odom` estimate for TurtleBot3 in Gazebo.",
      tech: ["ROS 2 Humble", "C++", "EKF", "State Estimation", "Sensor Fusion", "Gazebo"],
      link: "https://github.com/ninad164/ros2-ekf-localization",
      thumbnail: "/project-images/ekf-trajectory-comparison.png",
      previewVideo: "/project-images/ekf-line-demo.mp4",
      demoLink: "/project-images/ekf-line-demo.mp4",
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

  const skillGroups = [
    {
      title: "Robotics",
      skills: ["ROS", "ROS 2", "Gazebo", "RViz", "MuJoCo", "MoveIt 2"],
    },
    {
      title: "Autonomy & Estimation",
      skills: ["Navigation", "Sensor Fusion", "EKF", "Localization", "Motion Control", "PCL"],
    },
    {
      title: "AI/ML",
      skills: ["Reinforcement Learning", "PPO", "Computer Vision", "Emotion Recognition", "LLM-based Interaction"],
    },
    {
      title: "Programming",
      skills: ["Python", "C++", "MATLAB", "Git", "Linux"],
    },
    {
      title: "Hardware / Sensors",
      skills: ["Clearpath JACKAL", "OAK-D Pro", "ReSpeaker Mic Array"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm tracking-wide text-cyan-300">
                Robotics Software • Autonomy • AI Robotics
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Ninad Alurkar
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Robotics Engineer focused on autonomous systems, robot perception, reinforcement learning, and human-robot interaction.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
                I build ROS and ROS 2 software for perception-driven autonomy, sensor fusion,
                probabilistic localization, simulation, and intelligent robot behavior.
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
                    Autonomous navigation, perception, and AI-enabled robotics
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Background</p>
                  <p className="mt-2 text-slate-300">
                    Master's graduate with hands-on experience across ROS/ROS 2,
                    MuJoCo and Gazebo simulation, localization, perception, and HRI systems.
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Looking For</p>
                  <p className="mt-2 text-slate-300">
                    Robotics software, autonomy, AI robotics, and research engineering roles.
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
              Building robotics software for perception, autonomy, and interaction
            </h2>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-slate-300 shadow-xl shadow-black/20">
            <p className="leading-8">
              I build robotics software that connects perception, planning, state estimation,
              and intelligent interaction. My work spans ROS/ROS 2 systems, simulation-based
              autonomy, reinforcement learning navigation, probabilistic localization, sensor
              fusion, and multimodal human-robot interaction.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Robotics Software Roles
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Recruiter-ready highlights across autonomy, perception, planning, state estimation,
            and simulation for production-oriented robotics teams.
          </p>
        </div>

        <div className="relative space-y-6 before:absolute before:bottom-6 before:left-[1.05rem] before:top-6 before:hidden before:w-px before:bg-gradient-to-b before:from-cyan-400/50 before:via-slate-700 before:to-transparent md:before:block">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.duration}`}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/95 p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-cyan-950/20 md:ml-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_38%)] opacity-70 transition duration-300 group-hover:opacity-100" />
              <div className="absolute left-[-2.15rem] top-8 hidden h-4 w-4 rounded-full border border-cyan-300/70 bg-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.35)] md:block" />

              <div className="relative">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                      {experience.role}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white md:text-[1.75rem]">
                      {experience.company}
                    </h3>
                    <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                      {experience.summary}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm font-medium text-slate-200">
                    {experience.duration}
                  </div>
                </div>

                <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
                  {experience.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-slate-800/80 bg-slate-950/40 px-4 py-3 transition duration-300 group-hover:border-slate-700"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300 transition duration-300 group-hover:border-cyan-400/30 group-hover:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
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
          className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-slate-700"
        >
          {project.thumbnail && (
            <div className="mb-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
              <div className="relative aspect-video">
                <img
                  src={project.thumbnail}
                  alt={`${project.title} thumbnail`}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-300 ${
                    project.preview || project.previewVideo ? "group-hover:opacity-0" : ""
                  }`}
                />
                {project.preview && (
                  <img
                    src={project.preview}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-300 group-hover:opacity-100"
                  />
                )}
                {project.previewVideo && (
                  <video
                    src={project.previewVideo}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-300 group-hover:opacity-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                )}
              </div>
            </div>
          )}

          <p className="text-sm font-medium text-cyan-300">
            {project.subtitle}
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-white">
            {project.title}
          </h3>

          <p className="mt-4 leading-7 text-slate-300">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1 text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                View Project
              </a>
            )}

            {project.thesisPdf && (
              <a
                href={project.thesisPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/20 text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Read Thesis
              </a>
            )}

            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-white/20 text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Demo / Results
              </a>
            )}
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
            Robotics Software Stack
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-2xl border border-slate-700 px-4 py-2 text-sm text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
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
            Let&apos;s connect
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            I am open to robotics software, AI robotics, autonomy, and research engineering
            opportunities. Recruiters and robotics teams can reach me through email,
            LinkedIn, or GitHub.
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
