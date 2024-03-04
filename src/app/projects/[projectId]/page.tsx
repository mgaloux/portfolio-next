"use client";

import "../Projects.css";
import "../../index.css";
import {
  ProjectDataInterface,
  TestimonialDataInterface,
  projectsData,
} from "./ProjectsData";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { lilitaOne, poppins } from "@/fonts/fonts";

const ProjectTemplate = () => {
  /*const projectData: ProjectDataInterface = {
    images: [
      "https://media.discordapp.net/attachments/909785310039253022/1169995117453652018/ZackScreenshot.PNG?ex=65576ddd&is=6544f8dd&hm=6d5b9af961607d5422549a6f4fb0d9db1df71dbc046ba65603673c79367dda23&=&width=711&height=670",
    ],
    tags: [
      "Chrome Extension",
      "HTML",
      "JavaScript",
      "React.js",
      "GraphQL",
      "Twitch",
      "YouTube",
      "API",
    ],
    testimonials: [
      {
        referentPictureUrl:
          "https://yt3.googleusercontent.com/ytc/APkrFKZ9dIxjSJi5Ee_VgHAYtOw4kWwn0jI6ShxO5o9YCA=s900-c-k-c0x00ffffff-no-rj",
        referent: "Zack Nani",
        referentRole: "Streamer & Youtuber",
        testimonialText: "Wow pas mal",
      },
    ],
    bodyDescription: `I began by clarifying the streamer's expectations to identify the desired features. Subsequently, I proposed an initial prototype following prototyping conducted on Figma, and we iterated until we found the perfect solution for my client.<br/><br/>
  
    Once the design and features were defined, I constructed the HTML page and implemented various notification features using the YouTube and Twitch APIs. This enabled viewers to receive updates every minute, indicating the release of a new video or the start of Zack's live stream.<br/><br/>
    
    By employing different colors for the icon and notifications, we effectively kept users informed at all times, allowing them to join with a single click from their browser and ensuring they didn't miss any of his valuable content.`,
    contextDescription: `In order to enhance and stabilize his viewership, renowned streamer Zack Nani required a Google Chrome extension. This extension allowed him to provide his dedicated community with real-time notifications on their screens whenever he initiated a live streaming session.`,
    responsibilities: [
      "Clarified client expectations",
      "Designed and developed a Chrome extension",
      "Frontend made with (HTML, CSS, JavaScript)",
      "Backend (YouTube and Twitch API via GraphQL)",
      "Published the extension on the Chrome Web Store for user access",
    ],
    pictureUrl:
      "https://cdn.discordapp.com/attachments/909785310039253022/1169995492734812160/icon128.png?ex=65f450b6&is=65e1dbb6&hm=ecb64ac43747e6c39ae4299d1e803173b753ec2841b9282fdc0595b60f4cd730&",
    date: `2023`,
    title: "Zack Nani Live Extension",
    subtitle: "Freelance Project",
  };*/

  const params = useParams();
  console.log(params);
  const projectId: string = Array.isArray(params?.projectId)
    ? params.projectId[0]
    : params?.projectId || "conity";
  const projectData: ProjectDataInterface | undefined =
    projectsData.get(projectId);

  return (
    <div>
      <Navbar />
      {projectData && (
        <div className="w-[100vw] px-[15%] my-24">
          <div className="flex items-center mb-4">
            <img
              className="size-[100px] rounded-full mr-4"
              src={projectData.pictureUrl}
              alt={projectData.title + " Logo"}
            />
            <div>
              <h1 style={lilitaOne.style} className="text-3xl">
                {projectData.title}
              </h1>
              <h2 className="text-gray-500 text-xl">
                {projectData.subtitle} • {projectData.date}
              </h2>
            </div>
          </div>
          <section>
            <h3>Technologies</h3>
            <div className="flex gap-2 flex-wrap my-4">
              {projectData.tags.map((tag: string, index: number) => (
                <div
                  key={index}
                  className="border border-gray-400 text-gray-300 rounded-xl px-2 py-1"
                >
                  {tag}
                </div>
              ))}
            </div>
          </section>
          <section>
            <h3>Context</h3>
            <p
              style={poppins.style}
              dangerouslySetInnerHTML={{
                __html: projectData.contextDescription,
              }}
            />
          </section>
          <section>
            <h3>Key Responsibilities</h3>
            <ul className="project-responsibilities">
              {projectData.responsibilities.map((r: string, index: number) => (
                <li key={index} className="project-responsibility">
                  {r}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Description</h3>
            <p
              style={poppins.style}
              dangerouslySetInnerHTML={{ __html: projectData.bodyDescription }}
            />
          </section>
          {projectData.testimonials ? (
            <>
              <section>
                <h3>People I've worked with</h3>
                {projectData.testimonials.map(
                  (
                    testimonialData: TestimonialDataInterface,
                    index: number,
                  ) => (
                    <a href={testimonialData.linkedInUrl} target="_blank">
                      <div className="testimonies-section" key={index}>
                        <div className="testimonial-pic">
                          <img
                            src={testimonialData.referentPictureUrl}
                            alt="testimonier"
                          />
                        </div>
                        <blockquote className="testimonial">
                          {testimonialData.testimonialText}
                          <cite>
                            <b>{testimonialData.referent}</b>,{" "}
                            {testimonialData.referentRole}
                          </cite>
                        </blockquote>
                      </div>
                    </a>
                  ),
                )}
              </section>
            </>
          ) : (
            ""
          )}
          {projectData.images ? (
            <>
              <section className="image-section">
                <h3>Images</h3>
                {projectData.images.map((url: string, index: number) => (
                  <img
                    className="project-image"
                    src={url}
                    alt={"image" + index}
                  />
                ))}
              </section>
            </>
          ) : (
            ""
          )}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProjectTemplate;
