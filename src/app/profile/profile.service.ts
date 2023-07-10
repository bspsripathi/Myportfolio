import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Check about Project as below',
      desc: '',
      livedemo: 'https://bspsripathi.github.io/Restaurant-Frontend/index.html',
      githurl: 'https://github.com/bspsripathi/Restaurant-Frontend.git',
      imgUrl: 'assets/images/Rest.png',
      tech: 'Html,CSS,JS'
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
      livedemo: 'https://bspsripathi.github.io/Team-budget-planner/index.html',
      githurl: 'https://github.com/bspsripathi/Team-budget-planner.git',
      imgUrl: 'assets/images/budget.png',
      tech: 'java Script,Html,CSS'
    },
  ]
  about2 = `Software Trainee with 0.3 years of experience .
  Trained with Software Development Life Cycle(SDLC) and  agile methodologies .
  Have good understanding of Python, java core, Bootstrap,Spring boot, and MYSQL`

  about = "Looking to work in an organization that can provide a variety of opportunitiesthat allow me to expand my skills and knowledge while working towards achieving theorganizational goals."
  resumeurl = "https://docs.google.com/document/d/1iFCSMisbWDxrW-ku-jMbVlEIZjGVtkKy/edit?usp=sharing&ouid=105902641167200071087&rtpof=true&sd=true"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '65%'
    },
    
    {
      'id': '3',
      'skill': 'HTML,CSS,JS',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'MYSQL,',
      'progress': '75%'
    },
    
    {
      'id': '6',
      'skill': 'C,PYTHON,JAVA',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2018 - 2022',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of TECHNOLOGY',
      'info': `AICTE 2ND RANK
      Completed B.Tech in Electronics and Communication Engineering with 8.74 CGPA.
      Won the Best Project Award 2 times for excellent Project at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'CHADALAWADA RAMANAMMA ENGINEERING COLLEGE,TIRUPATI'
    },
    {
      'id': '2',
      'from_to_year': '2016 - 2018',
      'education': 'INTERMEDIATE ',
      'stream': 'Maths, Physics, and Chemistry(MPC)',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 94.2%.`
    },
    {
      'id': '3',
      'from_to_year': '2015 - 2016',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'ZP HIGH SCHOOL,TIRUCHANUR',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 75%.`
    }
  ];


  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Blog.png',
      url: 'https://bsripathi429.wixsite.com/bsp26'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Git.png',
      url: 'https://github.com/bspsripathi'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
