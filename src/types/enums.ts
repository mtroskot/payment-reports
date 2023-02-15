export enum QueryKey {
  GET_USER = "GET_USER",
  GET_PROJECTS = "GET_PROJECTS",
  GET_GATEWAYS = "GET_GATEWAYS",
  GET_REPORTS = "GET_REPORTS",
}

export enum SidebarMenu {
  STATS = "stats",
  GROUPS = "groups",
  PAYMENTS = "payments",
  REPORTS = "reports",
  LOGOUT = "logout",
}

export enum ReportsFilter {
  PROJECT,
  GATEWAY,
  FROM_DATE,
  TO_DATE,
}

export enum AppRoutes {
  HOME = "/",
  DASHBOARD = "/dashboard",
  REPORTS = "/dashboard/reports",
  STATS = "/dashboard/stats",
  PAYMENTS = "/dashboard/payments",
  GROUPS = "/dashboard/groups",
  PRIVACY_POLICY = "/legal/privacy-policy",
  TERMS_AND_CONDITIONS = "/legal/terms-and-conditions",
}
