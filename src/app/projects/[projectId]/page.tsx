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
  const params = useParams();
  const projectId: string = Array.isArray(params?.projectId)
    ? params.projectId[0]
    : params?.projectId;
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
                      <div key={index}>
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
                <div className="flex flex-wrap gap-4 justify-center">
                  {projectData.images.map((url: string, index: number) => (
                    <img
                      className="max-w-[500px]"
                      src={url}
                      alt={"image" + index}
                    />
                  ))}
                </div>
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
