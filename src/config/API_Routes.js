const Api_routes = {
  //auth routes
  walletConnect: "/auth/register/wallet",
  userType: "/auth/register/type",
  setUsername: "/auth/register/username",
  saveEmail: "/auth/register/email",
  getToken: "/auth/token",
  refreshToken: "/auth/refresh/token",

  //user routes
  getUser: "/user/get",
  // badge routes
  createBadge: "/badge/create",
  getBadge: "/badge/show",
  issueBadge: "/badge/issue",
  showAllBadges: "/badge/show/all",
  badgeDetail: "/badge/", // TODO: use dynamic variables
  // claim routes
  claimBadge: "/claim/badge",
};

const server_url = process.env.REACT_APP_LOCAL_SERVER_URL;
// const auth_server_url = process.env.REACT_APP_AUTH_SERVER_URL
// const dashboard_server_url = process.env.REACT_APP_DASHBOARD_SERVER_URL
// const extension_server_url = process.env.REACT_APP_EXTENSION_SERVER_URL

export { Api_routes, server_url };
