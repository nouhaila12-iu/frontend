export class Course
{
  courseid : number;
  coursecode : string;
  coursename : string;
  author : string;
  descrp : string;
  rating : string;
  tags: string;
  test : string;
  chapters : string;
  videos : string;
  image : string;
  enrolls : number;
  posted_on : string;
  updated_on : string;
  dateovr :string;
  datefrm:string;
  nbh:string;


  constructor(courseid: number, course_code: string, course_name: string, author: string, descrp: string, rating: string, tags: string, tests: string, chapters: string, videos: string, image: string, enrolls: number, posted_on: string, updated_on: string, dateovr:string, datefrm:string, nbh:string) {
    this.courseid = courseid;
    this.coursecode = course_code;
    this.coursename = course_name;
    this.author = author;
    this.descrp = descrp;
    this.rating = rating;
    this.tags = tags;
    this.test = tests;
    this.chapters = chapters;
    this.videos = videos;
    this.image = image;
    this.enrolls = enrolls;
    this.posted_on = posted_on;
    this.updated_on = updated_on;
    this.dateovr= dateovr;
    this.datefrm= datefrm;
    this.nbh= nbh
  }
}
