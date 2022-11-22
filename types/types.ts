export interface Project {
  _createdAt?:       Date;
  _id?:              string;
  _rev?:             string;
  _type?:            string;
  _updatedAt?:       Date;
  githubRepository?: string;
  mainImage?:        MainImage;
  slug?:             Slug;
  technologies?:     Technology[];
  title?:            string;
  url?:              string;
}

export interface MainImage {
  _type?: string;
  asset?: Asset;
}

export interface Asset {
  _ref?:  string;
  _type?: string;
}

export interface Slug {
  _type?:   string;
  current?: string;
}

export interface Technology {
  descriptionIcon?:  MainImage;
  title?:  string;
}
