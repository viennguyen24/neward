type NavItems = {
  title: string;
};
type PartnersTypes = {
  url: string;
};

type PlanType = {
  title: string,
  perk:string[],
  description: string,
};

type DashboardSideBarTypes = {
  title: string;
  url: string;
  icon: any;
};

type subscribersDataTypes = {
  _id: string;
  email: string;
  createdAt: string | Date;
  source: string;
  status?: string;
};
