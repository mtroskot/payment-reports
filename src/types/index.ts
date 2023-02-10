export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Gateway {
  gatewayId: string;
  userIds: string[];
  name: string;
  type: string;
  apiKey: string;
  secondaryApiKey: string;
  description: string;
}

export interface Project {
  projectId: string;
  userIds: string[];
  rule: string;
  gatewayIds: string[];
  structure: string;
  industry: string;
  website: URLString;
  description: string;
  image: URLString;
  name: string;
}

export interface Report {
  paymentId: string;
  amount: number;
  projectId: string;
  gatewayId: string;
  userIds: string[];
  modified: DateString;
  created: DateString;
}

export interface DateString extends String {}
export interface URLString extends String {}
