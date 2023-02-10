import { APIClient } from "src/services/network/client";
import { AxiosResponse } from "axios";
import { Gateway, Project, Report, User } from "src/types";

export const getUsers = (): Promise<AxiosResponse<User[]>> => APIClient.getAPI().get("/users");

export const getGateways = (): Promise<AxiosResponse<Gateway[]>> => APIClient.getAPI().get("/gateways");

export const getProjects = (): Promise<AxiosResponse<Project[]>> => APIClient.getAPI().get("/projects");

export const getReports = ({
  from,
  to,
  gatewayId,
  projectId,
}: {
  from: string;
  to: string;
  projectId?: string;
  gatewayId?: string;
}): Promise<AxiosResponse<Report[]>> =>
  APIClient.getAPI().post("/reports", {
    from,
    to,
    gatewayId,
    projectId,
  });
