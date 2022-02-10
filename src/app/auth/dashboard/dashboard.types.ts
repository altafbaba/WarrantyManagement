export interface IDashboard {
  assets: IAssetDashboardData;
  ticket: ITicketDashboardData;
  users: IUserDashboardData;
}

export interface ITicketDashboardData {
  ticketStatusCount: {
    Assigned: number;
    Closed: number;
    Hold: number;
    'In Progress': number;
    Open: number;
    'Vendor Dependency': number;
  };
}

export interface IAssetDashboardData {
  assetStatusCount: {
    IN_POOL: number;
    ASSIGNED: number;
    SCRAP: number;
    DOWN: number;
  };
  assetsCountWithUpcommingExpireingInDays: {
    WARRANTY: number;
    AMC: number;
  };
  registeredAssets: number;
}

export interface IUserDashboardData {
  totalUsers: number;
}
