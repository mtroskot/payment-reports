import { APIClient } from "src/services/network/client";
import { BackendResponse, Gateway, Project, Report, User } from "src/types/interfaces";
import { formatDate } from "src/utils/date";
import { REPORT_DATE_FORMAT } from "src/types/data";

export const getUsers = (): Promise<BackendResponse<User[]>> => APIClient.getAPI().get("/users");

export const getGateways = (): Promise<BackendResponse<Gateway[]>> => APIClient.getAPI().get("/gateways");

export const getProjects = (): Promise<BackendResponse<Project[]>> => APIClient.getAPI().get("/projects");

export const getReport = ({
  from,
  to,
  gatewayId,
  projectId,
}: {
  from: Date;
  to: Date;
  projectId?: string;
  gatewayId?: string;
}): Promise<BackendResponse<Report[]>> =>
  APIClient.getAPI().post("/report", {
    from: formatDate(from, REPORT_DATE_FORMAT),
    to: formatDate(to, REPORT_DATE_FORMAT),
    gatewayId,
    projectId,
  });
