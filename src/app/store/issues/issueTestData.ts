import { Issue, IssueType, StatusType, PriorityType } from './issue.model';


export const issues: Issue[] = [
  {
    id: 45236,
    type: IssueType.TASK,
    title: 'demo',
    description: 'description',
    status: StatusType.BACKLOG,
    comments: [],
    assignees: [{
      id: 2,
      img: "../../../assets/images/tokyo.jpg",
      name: 'Tokyo'
    }, {
      id: 3,
      img: "../../../assets/images/denver.jpg",
      name: 'Denver'
    },],
    reporter: {
      id: 2,
      img: "../../../assets/images/tokyo.jpg",
      name: 'Tokyo'
    },
    priority: PriorityType.HIGH,
    createdAt: new Date(),
  },
  {
    id: 35216,
    type: IssueType.STORY,
    title: 'demo 1',
    description: 'description 1',
    status: StatusType.DONE,
    comments: [],
    assignees: [{
      id: 2,
      img: "../../../assets/images/tokyo.jpg",
      name: 'Tokyo'
    }, {
      id: 4,
      img: "../../../assets/images/professor.jpg",
      name: 'Professor'
    }],
    reporter: {
      id: 2,
      img: "../../../assets/images/tokyo.jpg",
      name: 'Tokyo'
    },
    priority: PriorityType.MEDIUM,
    createdAt: new Date(),

  },
  {
    id: 55236,
    type: IssueType.BUG,
    title: 'demo 2',
    description: 'description 2',
    status: StatusType.IN_PROGRESS,
    comments: [],
    assignees: [{
      id: 1,
      img: "../../../assets/images/berlin.jpg",
      name: 'Berlin'
    },
    {
      id: 2,
      img: "../../../assets/images/tokyo.jpg",
      name: 'Tokyo'

    },
    {
      id: 3,
      img: "../../../assets/images/denver.jpg",
      name: 'Denver'
    },
    {
      id: 4,
      img: "../../../assets/images/professor.jpg",
      name: 'Professor'
    }],
    reporter: {
      id: 2,
      img: "../../../assets/images/tokyo.jpg",
      name: 'Tokyo'
    },
    priority: PriorityType.LOW,
    createdAt: new Date(),

  },

];
