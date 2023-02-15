import { FunctionComponent, SVGProps } from "react";
import { SidebarMenu } from "src/types/enums";

export type BackendResponse<T> = { status: number; error: string | null; data: T };

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

export type TypographyType = "TITLE" | "SUBTITLE" | "LINKS" | "SMALL_TEXT";

export interface SidebarMenuItem {
  onClick: (menu: SidebarMenu) => void;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  name: SidebarMenu;
}

export interface DropdownPickerItem {
  title: string;
  id: string;
  onClick: () => void;
  isSelected: boolean;
}

export type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

export type PieChartData = [string, number];

export interface ReportItem {
  name: string;
  total: number;
  id: string;
  reports: Report[];
}

export type ReportOverviewTableHeaderKey = "date" | "gateway" | "transactionId" | "amount";
