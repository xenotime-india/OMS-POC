import mcs from './../lib/mcs';
import config from './../lib/oracle_mobile_cloud_config';

export const mcsBackend = () => {
  mcs.mobileBackendManager.setConfig(config);
  const mcsBackend = mcs.mobileBackendManager.getMobileBackend(
    'YOUR_BACKEND_NAME'
  );
  if (mcsBackend != null) {
    mcsBackend.setAuthenticationType('oAuth');
  }
  return mcsBackend;
};

export const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    mcsBackend().Authorization.authenticate(
      username,
      password,
      resolve,
      reject
    );
  });
};
