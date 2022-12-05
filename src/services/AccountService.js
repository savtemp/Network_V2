import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";
import { Account } from "../models/Account";

class AccountService {
  async getAccount() {
    try {
      const res = await api.get("/account");
      console.log("[ACCOUNT DATA]", res.data);
      AppState.account = new Account(res.data);
      console.log("[YOUR ACCOUNT]", AppState.account);
    } catch (err) {
      logger.error("HAVE YOU STARTED YOUR SERVER YET???", err);
    }
  }

  async edit(accountBody) {
    let res = api.put("/account", accountBody);
    AppState.account = res.data;
  }
}

export const accountService = new AccountService();
