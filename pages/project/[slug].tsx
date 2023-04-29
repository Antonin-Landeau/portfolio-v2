import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { sanityClient } from "../../sanity";
import { Project, Slug } from "../../types/types";
import path from "path";

interface props {
 project: Project;
}

const Project = ({ project }: props) => {
 return (
  <div>
   <h1>{project?.title}</h1>
  </div>
 );
};

export const getStaticPaths = async () => {
 const query = `*[_type == "project"]{
   "slug": slug.current
  }`;

 const projects = await sanityClient.fetch(query);

 const paths = projects.map((path: any) => {
  console.log(path)
  return {
   params: { slug: path.slug },
  };
 });

 console.log("paths --------------------------", paths);
 return {
  paths,
  fallback: false,
 };
};

export const getStaticProps: GetStaticProps = async (context) => {
 const slug = context.params?.slug;
 console.log("test");

 const query = `*[_type == 'project' && slug.current =="${slug}"][0]`;
 const project = await sanityClient.fetch(query);

 return {
  props: {
   project: project,
  },
 };
};

export default Project;
