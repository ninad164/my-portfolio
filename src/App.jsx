import { SpeedInsights } from '@vercel/speed-insights/react';

export default function RoboticsPortfolio() {
  const experiences = [
    {
      role: "Robotics Software Engineer",
      company: "Boston Dynamics",
      duration: "Sep 2025 - Present | United States",
      summary:
        "Building autonomy and robotics software for real-time locomotion, state estimation, planning, and perception on production robotic systems.",
      bullets: [
        "Built ROS 2/C++ locomotion control for quadruped systems.",
        "Developed multi-sensor state estimation with EKF and factor graphs.",
        "Implemented motion planning with OMPL and MPC controllers.",
        "Built terrain segmentation and obstacle detection pipelines.",
        "Created sim-to-real validation workflows in Gazebo and Isaac Sim.",
        "Integrated lifecycle nodes and BT.CPP autonomy orchestration.",
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
        "Architected ROS 2 navigation systems for industrial robotics.",
        "Built multi-modal SLAM and localization pipelines.",
        "Created CI/CD robotics testing with Docker and Gazebo.",
        "Implemented real-time sensor fusion and state estimation.",
        "Optimized embedded AI perception with CUDA and TensorRT.",
        "Developed motion planning with MoveIt, OMPL, and ROS 2 Control.",
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
      title: "Robotics & Autonomy",
      skills: [
        "ROS 2",
        "Nav2",
        "Lifecycle Nodes",
        "DDS/FastDDS",
        "MoveIt",
        "OMPL",
        "Behavior Trees (BT.CPP)",
        "SLAM (LiDAR/Visual)",
        "Trajectory Optimization (MPC, RRT*, CHOMP)",
        "Multi-Robot Systems",
      ],
    },
    {
      title: "Perception & AI",
      skills: [
        "Computer Vision",
        "OpenCV",
        "Deep Learning",
        "PyTorch",
        "TensorFlow",
        "Object Detection",
        "YOLO-style Models",
        "Visual SLAM",
        "3D Mapping",
        "TensorRT",
        "ONNX Runtime",
      ],
    },
    {
      title: "Control & Embedded Systems",
      skills: [
        "C/C++",
        "Python",
        "Real-time Control Systems",
        "Sensor Fusion (EKF/UKF)",
        "ARM Cortex",
        "FPGA Integration",
        "FreeRTOS",
        "Motor Control Systems",
      ],
    },
    {
      title: "Simulation & Robotics Testing",
      skills: [
        "Gazebo",
        "Isaac Sim",
        "NVIDIA Omniverse",
        "HIL/SIL Testing",
        "Digital Twins",
      ],
    },
    {
      title: "Infrastructure & Tools",
      skills: [
        "Docker",
        "Kubernetes light",
        "Git",
        "CI/CD",
        "GitLab",
        "GitHub Actions",
        "CUDA",
        "MATLAB",
        "Agile Robotics Development",
        "Edge Deployment Systems",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-center">
            <div>
              <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm tracking-wide text-cyan-300">
                Robotics Software Engineer • Autonomy • ROS 2 • AI Robotics
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Ninad Alurkar
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Robotics Software Engineer specializing in autonomous systems, real-time robotics software, perception, sensor fusion, and motion planning.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
                I build ROS 2-based robotics systems that connect perception, planning, state
                estimation, and control for reliable autonomy. My work spans quadruped
                locomotion, industrial robotics, reinforcement learning navigation, EKF-based
                localization, and simulation-to-real validation.
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
                    Real-time autonomy, robotic perception, state estimation, and motion planning
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Background</p>
                  <p className="mt-2 text-slate-300">
                    Robotics Software Engineer with experience developing ROS 2 autonomy
                    pipelines, perception systems, sensor fusion, simulation workflows, and
                    embedded robotics software across industrial and mobile robotics applications.
                  </p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Looking For</p>
                  <p className="mt-2 text-slate-300">
                    Robotics software, autonomy, perception, motion planning, state estimation,
                    and AI robotics roles.
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
              Building reliable robotics software for autonomy, perception, and intelligent control
            </h2>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 text-slate-300 shadow-xl shadow-black/20">
            <p className="leading-8">
              I develop robotics software across the autonomy stack, from perception and sensor
              fusion to planning, localization, and control. My experience includes ROS 2
              systems, real-time robotics pipelines, EKF-based state estimation, motion
              planning, reinforcement learning navigation, and simulation-driven validation
              using Gazebo, MuJoCo, and Isaac Sim.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-12">
        <div className="mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Robotics Software Roles
            </h2>
          </div>
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

                <ul className="mt-6 grid gap-x-6 gap-y-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
                  {experience.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-5 transition duration-300"
                    >
                      <span className="absolute left-0 top-[0.7rem] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.35)]" />
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
            Technical Skills
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-200 md:text-[0.95rem]">
                  {group.skills.map((skill, index) => (
                    <span key={skill}>
                      {index > 0 && (
                        <span className="mx-2 text-cyan-300/80">&bull;</span>
                      )}
                      <span>{skill}</span>
                    </span>
                  ))}
                </p>
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
      <SpeedInsights />
    </div>
  );
}
