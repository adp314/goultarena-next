// NEXT AUTH

export interface VerificationTokenData {
  identifier: string;
  token: string;
  expires: Date;
}

export interface AccountData {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token?: string;
  access_token?: string;
  expires_at?: number;
  token_type?: string;
  scope?: string;
  id_token?: String;
  session_state?: String;
  user: UserData;
}

export interface SessionData {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;
  user: UserData;
}

// USER

export interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
  emailVerified: Date;
  image: string;
  characterLink: string;
  description: String;
  discord: string;
  twitter: string;
  youtube: string;
  gameInfos: GameInfosData;
  billingInfos: BillingInfosData;
  userWallet: UserWalletData;
  accounts: AccountData[];
  session: SessionData[];
  serverRegistered: String[];
}

export interface GameInfosData {
  id: string;
  level: number;
  rank?: string;
  totalMatchs: number;
  totalWins: number;
  totalDraws: number;
  totalLooses: number;
  User: UserData;
  userId: string;
}

export interface PaymentOrderData {
  id: string;
  user: UserData;
  userId: string;
  productName: string;
  codeCreator: string;
  checkoutSessionId: string;
  status: string;
  billingInfos: BillingInfosData;
  billingInfosId: string;
}

export interface BillingInfosData {
  id: string;
  firstName: string;
  lastName: string;
  country: string;
  street: string;
  number: string;
  zipCode: string;
  iban: string;
  PaymentOrder: PaymentOrderData[];
  cashoutDemand: CashoutDemandData[];
}

export interface CashoutDemandData {
  id: string;
  amount: number;
  BillingInfos: BillingInfosData;
  billingInfosId: string;
}

export interface MatchData {
  id: string;
  initialDate: string;
  finishDate: string;
  amount: number;
  team_a_playerIds: string;
  team_b_playerIds: string;
  score_team_a: string;
  score_team_b: string;
  winnerTeam: string;
  server: ServerData;
  serverId: string;
}

export interface ServerData {
  id: string;
  name: string;
  startDate: string;
  finishDate: string;
  gameCategory: string;
  date: string;
  linkImage?: string;
  totalRegistered?: number;
  serverMatchs: MatchData[];
}

export interface UserWalletData {
  id: string;
  tokensWallet: number;
  totalEarnings: number;
  totalSpends: number;
  User: UserData;
  userId: string;
}
