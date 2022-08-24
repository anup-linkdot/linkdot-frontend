import axios from "axios";
import { getToken } from "../services/auth.service";
import { getStorage, setStorage } from "../utils/auth-utils";
import { Api_routes, server_url } from "./API_Routes";

const postRequest = async (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: {
          Authorization: getStorage("token"),
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.status);
        resolve(response?.data);
      })
      .catch(async (error) => {
        // console.log(error.response)
        console.log(error.response.status);
        // console.log(response.status)
        if (error.response.status === 401) {
          getNewAccessToken();
          postRequest(url, data);
        }
        resolve(error.response.data);
      });
  });
};

const getRequest = async (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          Authorization: getStorage("token"),
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        resolve(response?.data);
      })
      .catch(async (error) => {
        console.log(error.response);
        console.log(error.response.status);
        if (error.response.status === 401) {
          await getNewAccessToken();
          getNewAccessToken();
          getRequest(url);
        } else reject(error.response.data);
      });
  });
};

const getNewToken = async (refresh_token) => {
  const url = server_url + Api_routes.refreshToken;
  return new Promise((resolve, reject) => {
    axios
      .post(
        url,
        {
          refresh_token: refresh_token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (response) => {
        await setStorage("token", response.data.data.access_token);
        resolve(response?.data);
      })
      .catch(async (error) => {
        reject(error.response.data);
      });
  });
};

const patchRequest = async (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, data, {
        headers: {
          Authorization: getStorage("token"),
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.status);
        resolve(response?.data);
      })
      .catch(async (error) => {
        // console.log(error.response)
        console.log(error.response.status);
        // console.log(response.status)
        if (error.response.status === 401) {
          getNewAccessToken();
          patchRequest(url);
        }
        resolve(error.response.data);
      });
  });
};

const getNewAccessToken = async () => {
  const refresh_token = getStorage("refresh_token");
  if (refresh_token) {
    try {
      const response = await getNewToken(refresh_token);
      const { access_token } = response.data;
      setStorage("token", access_token);
    } catch (error) {
      const wallet_id = getStorage("wallet_id");
      await getToken(wallet_id).then((res) => {
        const { access_token, refresh_token } = res.data;
        setStorage("token", access_token);
        setStorage("refresh_token", refresh_token);
      });
    }
  }
};

export { postRequest, getRequest, patchRequest };
